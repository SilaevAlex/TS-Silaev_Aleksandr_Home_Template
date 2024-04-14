interface Note {
    id: string;
    title: string;
    content: string;
    creationDate: Date;
    lastEditDate: Date;
    status: 'pending' | 'completed';
    requiresConfirmation: boolean;
}

class TodoList {
    private notes: Note[];

    constructor() {
        this.notes = [];
    }

    addNote(title: string, content: string, requiresConfirmation: boolean): void {
        const newNote: Note = {
            id: this.generateId(),
            title,
            content,
            creationDate: new Date(),
            lastEditDate: new Date(),
            status: 'pending',
            requiresConfirmation,
        };
        this.notes.push(newNote);
    }

    deleteNote(id: string): void {
        this.notes = this.notes.filter(note => note.id !== id);
    }

    editNote(id: string, title: string, content: string): void {
        const index = this.findNoteIndexById(id);
        if (index !== -1) {
            this.notes[index].title = title;
            this.notes[index].content = content;
            this.notes[index].lastEditDate = new Date();
        }
    }

    getNoteById(id: string): Note | undefined {
        return this.notes.find(note => note.id === id);
    }

    getAllNotes(): Note[] {
        return this.notes;
    }

    markNoteAsCompleted(id: string): void {
        const index = this.findNoteIndexById(id);
        if (index !== -1) {
            this.notes[index].status = 'completed';
        }
    }

    getTotalNotesCount(): number {
        return this.notes.length;
    }

    getPendingNotesCount(): number {
        return this.notes.filter(note => note.status === 'pending').length;
    }

    searchNotesByKeyword(keyword: string): Note[] {
        return this.notes.filter(note => note.title.includes(keyword) || note.content.includes(keyword));
    }

    sortNotesByStatus(): void {
        this.notes.sort((a, b) => a.status.localeCompare(b.status));
    }

    sortNotesByCreationDate(): void {
        this.notes.sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime());
    }

    private generateId(): string {
        return 'generatedId';
    }

    private findNoteIndexById(id: string): number {
        return this.notes.findIndex(note => note.id === id);
    }
}