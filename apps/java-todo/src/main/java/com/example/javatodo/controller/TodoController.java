package com.example.javatodo.controller;

import com.example.javatodo.dto.TodoDTO;
import com.example.javatodo.entity.Todo;
import com.example.javatodo.repository.TodoRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@Controller
public class TodoController {
    private final TodoRepository todoRepository;

    public TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @GetMapping("/")
    public String getTodos(Model model) {
        var todos = todoRepository.findAll();
        model.addAttribute("title", "Java Todo");
        model.addAttribute("todos", todos);

        return "home";
    }

    @PostMapping("/todo")
    public String createTodo(@ModelAttribute TodoDTO todoDTO) {
        var newTodo = new Todo();
        newTodo.setTodo(todoDTO.getTodo());
        newTodo.setDue(LocalDateTime.parse(todoDTO.getDue()));
        newTodo.setIsComplete(false);

        todoRepository.save(newTodo);
        return "redirect:/";
    }

    @DeleteMapping("/todo/{id}")
    public String deleteTodo(@PathVariable("id") String id) {
        todoRepository.deleteById(id);
        return "redirect:/";
    }
}
