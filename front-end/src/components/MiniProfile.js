import React from "react";
export default function MiniProfile() {
    return (
        <div class="container">
            <article class="media">
                <figure class="media-left">
                    <p class="image is-48x48">
                        <img
                            class="is-rounded"
                            src="https://bulma.io/images/placeholders/128x128.png"
                        />
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <a href="../screens/Public_Profile.js"><strong>Testing DDD</strong> <br /></a>
                            <small>@Eric-Yimmm</small>{" "}
                            <span class="tag is-success is-normal">Rating</span>{" "}
                            <small>100%</small>
                            <br />
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}