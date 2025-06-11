import axios from 'axios'

const API_URL = "https://dtfsgbwvuregmxjefvck.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0ZnNnYnd2dXJlZ214amVmdmNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQ2NjgsImV4cCI6MjA2NTE5MDY2OH0._1StydhZ96Oh2jer5yQBMMV-__8QHuVG8huuibr8yy8"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}