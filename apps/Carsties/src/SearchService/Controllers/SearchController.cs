﻿using Microsoft.AspNetCore.Mvc;
using MongoDB.Entities;
using SearchService.Models;
using SearchService.RequestHelpers;

namespace SearchService.Controllers;

[ApiController]
[Route("api/search")]
public class SearchController : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<Item>>> SearchItems([FromQuery] SearchParams searchParams)
    {
        var totalCount = await DB.CountAsync<Item>();
        var query = DB.Find<Item, Item>();

        if (!string.IsNullOrEmpty(searchParams.SearchTerm))
            query.Match(Search.Full, searchParams.SearchTerm).SortByTextScore();

        query = searchParams.OrderBy switch
        {
            "make" => query.Sort(x => x.Ascending(y => y.Make)).Sort(x => x.Ascending(m => m.Model)),
            "new" => query.Sort(x => x.Descending(y => y.CreatedAt)),
            _ => query.Sort(x => x.Ascending(y => y.AuctionEnd))
        };

        query = searchParams.FilterBy switch
        {
            "finished" => query.Match(x => x.AuctionEnd < DateTime.UtcNow),
            "endingSoon" => query.Match(x =>
                x.AuctionEnd < DateTime.UtcNow.AddHours(6) && x.AuctionEnd > DateTime.UtcNow),
            _ => query.Match(x => x.AuctionEnd > DateTime.UtcNow)
        };

        if (!string.IsNullOrEmpty(searchParams.Seller)) query.Match(x => x.Seller == searchParams.Seller);

        if (!string.IsNullOrEmpty(searchParams.Winner)) query.Match(x => x.Winner == searchParams.Winner);

        query.Skip((searchParams.PageNumber - 1) * searchParams.PageSize).Limit(searchParams.PageSize);

        var result = await query.ExecuteAsync();

        return Ok(new
        {
            results = result,
            pageCount = (int)Math.Ceiling((double)totalCount / searchParams.PageSize),
            totalCount
        });
    }
}