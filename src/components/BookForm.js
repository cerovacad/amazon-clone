import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';
import { addBook } from '../actions/bookActions';


class BookForm extends Component {
  state = {
    title : '',
    author: '',
    description: '',
    genre: 'drama',
    hardcover: false,
    hardcoverPrice: '',
    ebook: false,
    ebookPrice: '',
    audiobook: false,
    audiobookPrice: '',
    pages: '',
    language: '',
    publisher: '',
    newOrUsed: '',
    condition: '',
    tags: '',
    date: moment(),
    focusedCalendar: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    this.props.dispatch(addBook(this.state));
  }
  handleTitleChange = (e) => {
   this.setState({ title: e.target.value })
  }
  handleAuthorChange = (e) => {
    this.setState({ author: e.target.value })
  }
  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value })   
  }
  handleGenreChange = (e) => {
    this.setState({ genre: e.target.value })   
  }
  handleHardcoverPriceChange = (e) => {
    this.setState({ hardcoverPrice: e.target.value})
  }
  handleEbookPriceChange = (e) => {
    this.setState({ ebookPrice: e.target.value})
  }
  handleAudiobookPriceChange = (e) => {
    this.setState({ audiobookPrice: e.target.value})
  }
  handleNumberOfPagesChange = (e) => {
    this.setState({ pages: e.target.value})
  }
  handleLanguageChange = (e) => {
    this.setState({ language: e.target.value})
  }
  handlePublisherChange = (e) => {
    this.setState({ publisher: e.target.value})
  }
  handleNewOrUsedChange = (e) => {
    this.setState({ newOrUsed: e.target.value})
  }
  handleConditionChange = (e) => {
    this.setState({ condition: e.target.value})
  }
  handleTagsChange = (e) => {
    this.setState({ tags: e.target.value})
  }

  handleInputChange = (e) => {
    if(e.target.name === 'hardcover'){
      this.setState({
        hardcover: !this.state.hardcover
      })
    }else if(e.target.name === 'ebook'){
      this.setState({
        ebook: !this.state.ebook
      })
    }else if(e.target.name === 'audiobook'){
      this.setState({
        audiobook: !this.state.audiobook
      })
    }
  }
  
  onDateChange = (date) => {
      if(date){
          this.setState(() => ({ date }));
      }
  };
  onFocusChange = ({focused}) => {
      this.setState(() => ({ calendarFocused: focused }));
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          
          <label>Title
            <input type='text' 
                   value={this.state.title} 
                   placeholder='title'
                   onChange={this.handleTitleChange}/>
          </label><br/>

          <label>Author
            <input type='text'
                   value={this.state.author}
                   placeholder='author'
                   onChange={this.handleAuthorChange}/>
          </label><br/>

          <label>Description
            <textarea placeholder='description'
                      value={this.state.description}
                      onChange={this.handleDescriptionChange}></textarea>
          </label><br/>

          <label>Genre 
          <select onChange={this.handleGenreChange}>
            <option value="drama">Drama</option>
            <option value="bio">Biography</option>
            <option value="psychology">Psychology</option>
            <option value="webdev">Webdev</option>
            <option value="other">Other</option>
          </select>
          </label><br/>

          <label>Hardcover
            <input
              name="hardcover"
              type="checkbox"
              checked={this.state.hardcover}
              onChange={this.handleInputChange}/>
          </label><br/>
          {this.state.hardcover && <div><input type='number'
                                               value={this.state.hardcoverPrice} 
                                               placeholder='price'
                                               onChange={this.handleHardcoverPriceChange}/></div>}
          <label>Ebook
            <input
              name="ebook"
              type="checkbox"
              checked={this.state.ebook}
              onChange={this.handleInputChange}/>
          </label><br/>
          {this.state.ebook && <div><input type='number'
                                           value={this.state.ebookPrice} 
                                           placeholder='price'
                                           onChange={this.handleEbookPriceChange}/></div>}

          <label>Audiobook
            <input
              name="audiobook"
              type="checkbox"
              checked={this.state.audiobook}
              onChange={this.handleInputChange}/>
          </label><br/>
          {this.state.audiobook && <div><input type='number' 
                                               value={this.state.audiobookPrice}
                                               placeholder='price'
                                               onChange={this.handleAudiobookPriceChange}/></div>}

          <label>Number of pages
            <input type='number'
                   value={this.state.pages} 
                   placeholder='pages'
                   onChange={this.handleNumberOfPagesChange}/>
          </label><br/>

          <label>Language 
          <select onChange={this.handleLanguageChange}>
            <option value="serbian">Serbian</option>
            <option value="albanian">Albanian</option>
            <option value="english">English</option>
            <option value="reussian">Russian</option>
            <option value="german">German</option>
          </select>
          </label><br/>

          <label>Publisher
            <input type='text' 
                   value={this.state.publisher} 
                   placeholder='publisher'
                   onChange={this.handlePublisherChange}/>
          </label><br/>

          <label>Date published
            <SingleDatePicker 
                date={this.state.date}
                onDateChange={this.onDateChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
            />
          </label><br/>

          <label>New or used
          <select onChange={this.handleNewOrUsedChange}>
            <option value="new">new</option>
            <option value="used">used</option>
          </select>
          </label><br/>

          <label>Condition
          <select onChange={this.handleConditionChange}>
            <option value="1">5</option>
            <option value="2">4</option>
            <option value="3">3</option>
            <option value="4">2</option>
            <option value="5">1</option>
          </select>
          </label><br/>

          <label>Tags
            <input type='text' 
                   value={this.state.tags} 
                   placeholder='tags'
                   onChange={this.handleTagsChange}/>
          </label><br/>

          <button>Add</button>
          <button>Cancel</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookForm);


