// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, deleteComment, likeComment} = props
  const {name, comment, id, likeStatus, backColor} = commentDetails
  const likeActionBtn = () => {
    likeComment(id)
  }

  const deleteActionComment = () => {
    deleteComment(id)
  }

  const likeImage = likeStatus
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeText = likeStatus ? 'Liked' : 'Like'
  return (
    <li className="comment-display-container">
      <div className="comment-display-card">
        <h1 className={backColor}>{name[0].toUpperCase()}</h1>
        <div className="comment-details-card">
          <div className="commenter-name-card">
            <h1 className="commenter-name">{name}</h1>
            <p className="time-display">2 minute ago</p>
          </div>
          <p className="comment-description">{comment}</p>
        </div>
      </div>
      <div className="like-delete-btn-container">
        <div className="liked-card">
          <img src={likeImage} className="like-image" alt="like" />

          <button type="button" className={likeText} onClick={likeActionBtn}>
            {likeText}
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          className="delete-icon"
          alt="delete"
          onClick={deleteActionComment}
        />
      </div>
      <hr className="hr-line" />
    </li>
  )
}
export default CommentItem
