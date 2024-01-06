import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";


const reactionEmojis = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤",
    rocket: "🚀",
    coffee: "☕",
}
const ReactionButtons = ({post}) => {
    const dispatch = useDispatch();
    const reactionButtons = Object.entries(reactionEmojis).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reaction-button"
                onClick={() => dispatch(reactionAdded({postId: post.id, reaction: name}))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div className="reaction-buttons-con">{reactionButtons}</div>
}

export default ReactionButtons