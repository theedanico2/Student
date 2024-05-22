using System.Collections.Generic;
using System.Threading.Tasks;
using SQLite;
using Notes.Models;

namespace Notes.Data
{
    public class NoteDatabase
    {
        readonly SQLiteAsyncConnection database;

        public NoteDatabase(string dbPath)
        {
            database = new SQLiteAsyncConnection(dbPath);
            database.CreateTableAsync<Note>().Wait(); // Specify the type of the table
        }

        public Task<List<Note>> GetNotesAsync() // corrected method signature
        {
            //Get all notes.
            return database.Table<Note>().ToListAsync(); // Specify the type of the table
        }

        public Task<Note> GetNoteAsync(int id) // corrected method signature
        {
            // Get a specific note.
            return database.Table<Note>()
                            .Where(i => i.ID == id)
                            .FirstOrDefaultAsync();
        }

        public Task<int> SaveNoteAsync(Note note) // corrected method signature
        {
            if (note.ID != 0)
            {
                // Update an existing note.
                return database.UpdateAsync(note);
            }
            else
            {
                // Save a new note.
                return database.InsertAsync(note);
            }
        }

        public Task<int> DeleteNoteAsync(Note note) // corrected method signature
        {
            // Delete a note.
            return database.DeleteAsync(note);
        }
    }
}