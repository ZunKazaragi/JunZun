import React from 'react';
import thumbnail from '../thumb-1.png';
import thumbnail2 from '../thumb-2.jpg';
import thumbnail3 from '../thumb-3.jpg';
import thumbnail4 from '../thumb-4.jpg';

export default function Home() {
    return (
        <React.Fragment>
        <div className="lead-text">Recent Post</div>
        <div className="article-link">
        <div className="article-thumbnail">
          <img className="thumbnail" src={thumbnail}/>
        </div>
        <div className="article-metadata">
          <div className="article-title">DECO*27 - Undead Alice [I Tried To Sing]</div>
          <div className="article-date">12/01/2021</div>
          <div className="article-tags">
            <ul>
              <li><a href="#">Cover</a></li>
              <li><a href="#">Lyrics</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="article-link">
        <div className="article-thumbnail">
          <img className="thumbnail" src={thumbnail2}/>
        </div>
        <div className="article-metadata">
          <div className="article-title">Kanzaki Iori - Inochi ni Kirawareteiru [I Tried To Sing]</div>
          <div className="article-date">12/01/2021</div>
          <div className="article-tags">
            <ul>
              <li><a href="#">Cover</a></li>
              <li><a href="#">Lyrics</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="article-link">
        <div className="article-thumbnail">
          <img className="thumbnail" src={thumbnail3}/>
        </div>
        <div className="article-metadata">
          <div className="article-title">DECO*27 - Ghost Rule [I Tried To Sing]</div>
          <div className="article-date">12/01/2021</div>
          <div className="article-tags">
            <ul>
              <li><a href="#">Cover</a></li>
              <li><a href="#">Lyrics</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="article-link">
        <div className="article-thumbnail">
          <img className="thumbnail" src={thumbnail4}/>
        </div>
        <div className="article-metadata">
          <div className="article-title">Neru - Idola no Circus [I Tried To Sing]</div>
          <div className="article-date">12/01/2021</div>
          <div className="article-tags">
            <ul>
              <li><a href="#">Cover</a></li>
              <li><a href="#">Lyrics</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="article-link">
        <div className="article-thumbnail">
          <img className="thumbnail" src={thumbnail4}/>
        </div>
        <div className="article-metadata">
          <div className="article-title">Neru - Idola no Circus [I Tried To Sing]</div>
          <div className="article-date">12/01/2021</div>
          <div className="article-tags">
            <ul>
              <li><a href="#">Cover</a></li>
              <li><a href="#">Lyrics</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="article-link">
        <div className="article-thumbnail">
          <img className="thumbnail" src={thumbnail4}/>
        </div>
        <div className="article-metadata">
          <div className="article-title">Neru - Idola no Circus [I Tried To Sing]</div>
          <div className="article-date">12/01/2021</div>
          <div className="article-tags">
            <ul>
              <li><a href="#">Cover</a></li>
              <li><a href="#">Lyrics</a></li>
            </ul>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
}