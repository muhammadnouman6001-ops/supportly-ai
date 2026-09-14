from fastapi import FastAPI

app = FastAPI(
    title="Supportly AI API",
    description="Backend API for the Supportly AI customer support platform.",
    version="0.1.0",
)


@app.get("/")
def root():
    return {
        "message": "Supportly AI API is running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "service": "supportly-api"
    }