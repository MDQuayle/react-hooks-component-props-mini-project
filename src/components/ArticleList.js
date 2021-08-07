import React from "react";
import blogData from "../data/blog";
import Article from "./Article"
function ArticleList(){
    let newCounter = 1
    const whateverList= blogData.posts.map((things) => {
        return (<main key= {newCounter++}>
            <Article 
            title = {things.title}
            date = {things.date}
            preview = {things.preview}
            />
        </main>)
    })
        
    return (
        <main>
            {whateverList}
        </main>
    )
}

export default ArticleList;