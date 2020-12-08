import React,{useState,useContext} from 'react';
import {BookContext} from '../contexts/BookContext';

const BookForm = ()=>{
	const [title,setTitle]= useState("");
	const [author,setAuthor]=useState("");
	const {dispatch} = useContext(BookContext);
	const handleSubmit=(e)=>{
		e.preventDefault();
		dispatch({type:"ADD_BOOK",book:{title:title,author:author}})
		setTitle("");
		setAuthor("");
	}
	return(
		<form onSubmit={handleSubmit}>
			<input type="text" value={title} placeholder='Add title' 
				onChange={(e)=>setTitle(e.target.value)} required
			/>
			<input type="text" value={author} placeholder='Add author'
				onChange={(e)=>setAuthor(e.target.value)} required
			/>
			<input type="submit" value="Add Book" />
		</form>
	)
}

export default BookForm