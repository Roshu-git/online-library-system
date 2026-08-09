// Form page for adding a new book to the library

import { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 
import { addBook } from '../redux/booksSlice'; 
import { useNavigate } from 'react-router-dom'; 

export default function AddBook() { 
    // State for form fields 
    const [form, setForm] = useState({ title: '', author: '', category: 'fiction', description: '', rating: 5, });
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    // Submit the form and add the book to Redux state 
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        dispatch(addBook(form)); 

        // Redirect to the selected category after adding the book
        navigate(`/books/${form.category}`); 
    }; 
    return (
    <div className="max-w-2xl mx-auto p-6"> 
    <form onSubmit={handleSubmit} className="bg-white shadow rounded-2xl p-6 space-y-4" > 
        <h1 className="text-2xl font-bold mb-4">Add New Book</h1> 
        <input type="text" placeholder="Book title" required className="w-full p-3 border rounded-xl" onChange={e => setForm({ ...form, title: e.target.value })} /> 
        <input type="text" placeholder="Author" required className="w-full p-3 border rounded-xl" onChange={e => setForm({ ...form, author: e.target.value })} /> 
        <select className="w-full p-3 border rounded-xl" onChange={e => setForm({ ...form, category: e.target.value })} > 
            <option value="fiction">Fiction</option> 
            <option value="non-fiction">Non-Fiction</option> 
            <option value="sci-fi">Sci-Fi</option> 
        </select> 
        <textarea placeholder="Description" required className="w-full p-3 border rounded-xl h-32" onChange={e => setForm({ ...form, description: e.target.value })} /> 
            <input type="number" min="1" max="5" className="w-full p-3 border rounded-xl" onChange={e => setForm({ ...form, rating: e.target.value })} /> 
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"> Add Book </button> 
</form> 
</div>
); }