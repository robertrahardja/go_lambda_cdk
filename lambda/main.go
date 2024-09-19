package main

import (
	"context"

	"github.com/aws/aws-lambda-go/lambda"
)

func HandleRequest(ctx context.Context) (string, error) {
	return "Hello, World!", nil
}

func main() {
	lambda.Start(HandleRequest)
}
