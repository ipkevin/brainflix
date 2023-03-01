import likesIcon from '../assets/icons/likes.svg';
import viewsIcon from '../assets/icons/views.svg';

import CommentsArea from './CommentsArea';
import './VideoDetails.scss';

export default function VideoDetails() {
    return (
        <main>
          <article className="description">
            <h1 className="description__title">BMX Rampage: 2021 Highlights</h1>
            <section className="description__credits">
              <p className="description__author">By Red Crow</p>
              <p className="description__views"><img className="description__views-icon" src={viewsIcon} alt="view icon" />1,001,023</p>
              <p className="description__date">07/11/2021</p>
              <p className="description__likes"><img className="description__likes-icon" src={likesIcon} alt="Likes icon" />110,895</p>
            </section>
            <p className="description__body">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
          </article>
          <CommentsArea />        
        </main>
    )
};