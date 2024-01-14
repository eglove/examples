package utils

type ResponseData struct {
	Error *string     `json:"error"`
	Data  interface{} `json:"data"`
}

func NewResponseData(err string, data interface{}) *ResponseData {
	if err == "" {
		return &ResponseData{
			Error: nil,
			Data:  data,
		}
	}

	return &ResponseData{
		Error: &err,
		Data:  data,
	}
}
