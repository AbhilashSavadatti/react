const conf = {
        appwrite_url:String(import.meta.env.VITE_APPWRITE_URL),
        appwrite_projectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
        appwrite_databaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
        appwrite_collectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
        appwrite_bucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
        appwrite_apiKey:String(import.meta.env.VITE_APPWRITE_API_KEY),
    
}
// there was a name issue with the import.meta.env.VITE_APPWRITE_URL, it was later fixed in debugging video

export default conf