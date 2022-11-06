import React from "react"

const ArticleRenderer = React.memo(function ArticleRenderer({
    articles, className}) 
{
    
    return (
        <div>
            {articles.map((article) => {
                return <div className={className} id={article.name.replace(/[\s()./\\]/g, "") + "-container"}>
                    <h2 id={article.name.replace(/[\s()./\\]/g, "")}>{article.name}</h2>
                    {article.message.map((paragraph) => { return <p>{paragraph}</p> })}
                </div>
            })}
        </div>
    )

});
export default ArticleRenderer