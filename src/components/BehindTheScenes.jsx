import React, { Component } from 'react'
import images from '../assets/images'
import "../styles/components/BehindTheScenes.css";

export default class BehindTheScenes extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // console.log(business)
    }

    render () {
        if (this.props.business === undefined) {
            return <h1>Page is Loading</h1>
        } else {
        return <div>
            <img id="bannerImage" src={images.BehindTheScenesPlaceholderImage} />
            <h1>Behind the Scenes!</h1>
            <h2>
              The{" "}
              {typeof this.props.business.BusinessName === "string"
                ? this.props.business.BusinessName
                : "Business Name"}{" "}
              Story
            </h2>
            <p>
              {typeof this.props.business.AlumName === "string"
                ? this.props.business.AlumName
                : "Alum Name"}
            </p>
            <p id="questionOne">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>
            <p id="answerOne">
              Etiam eget leo ut massa sagittis fringilla at et ipsum.
              Nulla eu quam ut leo vulputate pretium id non nibh. Cras
              tincidunt egestas venenatis. Donec consectetur fermentum
              euismod. Ut fringilla accumsan justo non mattis. Proin
              tristique id ante maximus posuere. Pellentesque cursus
              consectetur volutpat. Nunc id congue massa, in tincidunt
              orci. Duis convallis, odio quis tristique semper, massa
              mauris tristique ex, at eleifend erat justo sit amet nisl.
            </p>
            <p id="questionTwo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>
            <p id="answerTwo">
                Etiam eget leo ut massa sagittis fringilla at et ipsum.
                Nulla eu quam ut leo vulputate pretium id non nibh. Cras
                tincidunt egestas venenatis. Donec consectetur fermentum
                euismod. Ut fringilla accumsan justo non mattis. Proin
                tristique id ante maximus posuere. Pellentesque cursus
                consectetur volutpat. Nunc id congue massa, in tincidunt
                orci. Duis convallis, odio quis tristique semper, massa
                mauris tristique ex, at eleifend erat justo sit amet nisl.
            </p>
            <p id="questionThree">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>
            <p id="answerThree">
                Etiam eget leo ut massa sagittis fringilla at et ipsum.
                Nulla eu quam ut leo vulputate pretium id non nibh. Cras
                tincidunt egestas venenatis. Donec consectetur fermentum
                euismod. Ut fringilla accumsan justo non mattis. Proin
                tristique id ante maximus posuere. Pellentesque cursus
                consectetur volutpat. Nunc id congue massa, in tincidunt
                orci. Duis convallis, odio quis tristique semper, massa
                mauris tristique ex, at eleifend erat justo sit amet nisl.
            </p>
            <p id="questionFour">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>
            <p id="answerFour">
                Etiam eget leo ut massa sagittis fringilla at et ipsum.
                Nulla eu quam ut leo vulputate pretium id non nibh. Cras
                tincidunt egestas venenatis. Donec consectetur fermentum
                euismod. Ut fringilla accumsan justo non mattis. Proin
                tristique id ante maximus posuere. Pellentesque cursus
                consectetur volutpat. Nunc id congue massa, in tincidunt
                orci. Duis convallis, odio quis tristique semper, massa
                mauris tristique ex, at eleifend erat justo sit amet nisl.
            </p>
          </div>;
        }
    }
}