import React, { Component } from 'react'
import images from '../assets/images'
import '../styles/components/BehindTheScenes.css'

export default class BehindTheScenes extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    if (this.props.business === undefined) {
      return <h1>Page is Loading</h1>
    } else {
      return <div>
        <img id="bannerImage" src={this.props.business.Image2_Url} />
        <h1 id="behindthescenestitle">Behind the Scenes!</h1>
        <h2 id="story">
              The{' '}
          {typeof this.props.business.BusinessName === 'string'
            ? this.props.business.BusinessName
            : 'Business Name'}{' '}
              Story
        </h2>
        <p id="behindthescenesalumname">
          {typeof this.props.business.AlumName === 'string'
            ? this.props.business.AlumName
            : 'Alum Name'}
        </p>
        <p className="question">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </p>
        <p className="answer">
              Etiam eget leo ut massa sagittis fringilla at et ipsum.
              Nulla eu quam ut leo vulputate pretium id non nibh. Cras
              tincidunt egestas venenatis. Donec consectetur fermentum
              euismod. Ut fringilla accumsan justo non mattis. Proin
              tristique id ante maximus posuere. Pellentesque cursus
              consectetur volutpat. Nunc id congue massa, in tincidunt
              orci. Duis convallis, odio quis tristique semper, massa
              mauris tristique ex, at eleifend erat justo sit amet nisl.
        </p>
        <p className="question">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </p>
        <p className="answer">
                Etiam eget leo ut massa sagittis fringilla at et ipsum.
                Nulla eu quam ut leo vulputate pretium id non nibh. Cras
                tincidunt egestas venenatis. Donec consectetur fermentum
                euismod. Ut fringilla accumsan justo non mattis. Proin
                tristique id ante maximus posuere. Pellentesque cursus
                consectetur volutpat. Nunc id congue massa, in tincidunt
                orci. Duis convallis, odio quis tristique semper, massa
                mauris tristique ex, at eleifend erat justo sit amet nisl.
        </p>
        <p className="question">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </p>
        <p className="answer">
                Etiam eget leo ut massa sagittis fringilla at et ipsum.
                Nulla eu quam ut leo vulputate pretium id non nibh. Cras
                tincidunt egestas venenatis. Donec consectetur fermentum
                euismod. Ut fringilla accumsan justo non mattis. Proin
                tristique id ante maximus posuere. Pellentesque cursus
                consectetur volutpat. Nunc id congue massa, in tincidunt
                orci. Duis convallis, odio quis tristique semper, massa
                mauris tristique ex, at eleifend erat justo sit amet nisl.
        </p>
        <p className="question">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </p>
        <p className="answer">
                Etiam eget leo ut massa sagittis fringilla at et ipsum.
                Nulla eu quam ut leo vulputate pretium id non nibh. Cras
                tincidunt egestas venenatis. Donec consectetur fermentum
                euismod. Ut fringilla accumsan justo non mattis. Proin
                tristique id ante maximus posuere. Pellentesque cursus
                consectetur volutpat. Nunc id congue massa, in tincidunt
                orci. Duis convallis, odio quis tristique semper, massa
                mauris tristique ex, at eleifend erat justo sit amet nisl.
        </p>
      </div>
    }
  }
}
