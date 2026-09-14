from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="Supportly AI API",
    description="Backend API for the Supportly AI customer support platform.",
    version="0.1.0",
)


origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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