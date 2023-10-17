/* eslint-disable prettier/prettier */
import {Component} from 'react'

import {v4 as commentId} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const commentsList = []

// Write your code here

class Comments extends Component {
  state = {
    countComment: 0,
    name: '',
    comment: '',
    addComments: commentsList,
    allColors: initialContainerBackgroundClassNames,
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment, allColors} = this.state

    const randomIndex = Math.floor(Math.random() * allColors.length)

    const currentColor = allColors[randomIndex]

    const newComment = {
      id: commentId(),
      name,
      comment,
      backColor: currentColor,
      likeStatus: false,
    }

    this.setState(prevState => ({
      addComments: [...prevState.addComments, newComment],
      name: '',
      comment: '',
      countComment: prevState.countComment + 1,
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onLikeComment = id => {
    const {addComments} = this.state
    const upDateComments = addComments.map(eachComment => {
      if (eachComment.id === id) {
        if (eachComment.likeStatus === false) {
          const likeUpdate = {
            id: eachComment.id,
            name: eachComment.name,
            comment: eachComment.comment,
            backColor: eachComment.backColor,
            likeStatus: true,
          }
          return likeUpdate
        }
        const likeUpdate = {
          id: eachComment.id,
          name: eachComment.name,
          comment: eachComment.comment,
          backColor: eachComment.backColor,
          likeStatus: false,
        }
        return likeUpdate
      }
      return eachComment
    })
    this.setState({addComments: upDateComments})
  }

  onDeleteComment = id => {
    const {addComments} = this.state
    const upDateComments = addComments.filter(
      eachComment => eachComment.id !== id,
    )

    this.setState(prevState => ({
      addComments: upDateComments,
      countComment: prevState.countComment - 1,
    }))
  }

  render() {
    const {countComment, name, comment, addComments} = this.state

    return (
      <div className="comments-bg-container">
        <div className="comments-inner-content-card">
          <h1 className="comment-heading">Comments</h1>
          <div className="comment-optimization-card">
            <form
              className="comments-form-container"
              onSubmit={this.onAddComment}
            >
              <p className="type-of-comment">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                placeholder="Your Name"
                className="input-field"
                onChange={this.onChangeName}
                value={name}
                required
              />
              <textarea
                placeholder="Your Comment"
                className="input-field"
                rows="7"
                cols="50"
                value={comment}
                onChange={this.onChangeComment}
                required
              />
              <button type="submit" className="button" data-testid="delete">
                Add Comment
              </button>
            </form>

            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comment-image"
              alt="comments"
            />
          </div>
          <hr className="hr-line" />

          <p className="type-of-comment">
            <span className="count">{countComment}</span> comment
          </p>
          <ul className="comment-list">
            {addComments.map(eachComment => (
              <CommentItem
                commentDetails={eachComment}
                key={eachComment.id}
                deleteComment={this.onDeleteComment}
                likeComment={this.onLikeComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
