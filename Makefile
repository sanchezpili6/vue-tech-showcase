.PHONY: all7

all: up

help: ## `make help` will return this documentation
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build_back: ## builds db and flask app
	docker-compose build

up: ## runs the whole app
	docker-compose up -d
	npm run --prefix frontend serve

logs_back: ## shows the backend logs
	docker-compose logs -f api