document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('noteForm');
    const noteList = document.getElementById('noteList');
    
    // Load notes from localStorage
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    const displayNotes = () => {
        noteList.innerHTML = '';
        notes.forEach((note, index) => {
            const noteDiv = document.createElement('div');
            noteDiv.classList.add('note');
            noteDiv.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.content}</p>
                <button onclick="deleteNote(${index})">Eliminar</button>
            `;
            noteList.appendChild(noteDiv);
        });
    };

    const addNote = (event) => {
        event.preventDefault();
        const noteTitle = document.getElementById('noteTitle').value;
        const noteContent = document.getElementById('noteContent').value;
        notes.push({ title: noteTitle, content: noteContent });
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
        form.reset();
    };

    form.addEventListener('submit', addNote);

    window.deleteNote = (index) => {
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
    };

    displayNotes();
});
