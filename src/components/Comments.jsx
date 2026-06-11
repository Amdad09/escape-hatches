import { useEffect, useState } from "react";
import { fetchComments } from "../utils/fetchComments";

const Comments = ({id}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        let ignore = false;
        console.log('Effecting ....')
        async function startFetching() {
            console.log('Fetching ...')
            const json = await fetchComments(id);

            if (!ignore) {
                console.log('Setting ...')
                setComments(json);   
            }
        }
        startFetching();

        return () => {
            ignore = true;
        }

    }, [id])
    
    return (
        <div>
            {comments.map(comment => <li key={comment.id}>{ comment.email}</li>)}
        </div>
    );
};

export default Comments;