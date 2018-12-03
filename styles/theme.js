function Styles() {
  return (
    <style global jsx>
      {`
        html {
          font-family: 'Helvetica Neue', Helvetica;
        }

        body {
          margin: 0 auto;
        }

        a {
          color: inherit;
          text-decoration: inherit;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        button {
          background: none;
          border: none;
          cursor: pointer;
          font: inherit;
          padding: 0;
        }

        header {
          text-align: center;
          border-bottom: 1px solid lightgrey;
        }

        header h1 {
          font-weight: bold;
          color: #034752;
          padding: 0.8em;
        }

        .Headline {
          height: 100%;
          padding: 3.2em 7.2em;
        }

        .Headline h2 {
          font-size: 3.2em;
          padding-bottom: 0.4em;
        }

        .Headline p {
          color: grey;
          font-size: 1.6em;
          font-weight: light;
        }

        .Thanks {
          text-align: center;
        }

        .HeroContainer {
          display: flex;
          width: 100%;
          justify-content: space-between;
        }

        .HeroContainer img {
          width: 64%;
          height: 64%;
        }

        .HeroInfo {
          border-top: 4px solid #034752;
          width: 32%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }

        .TotalAmount,
        .TotalBackers,
        .TotalDays {
          font-size: 2.4em;
          color: steel;
        }

        .TotalAmount {
          color: #037362;
        }

        .Pledged,
        .Backers,
        .DaysToGo {
          font-size: 1.2em;
          color: grey;
        }

        .BackButton,
        .FAQ button {
          color: white;
          background-color: #009e74;
          margin-top: 1.4em;
          height: 2.4em;
          font-size: 1.2em;
          width: 100%;
        }

        .ShareButtons {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-top: 0.8em;
        }

        .Headline,
        .HeroContainer {
          max-width: 968px;
          margin: auto;
        }

        .Menu {
          border-top: 1px solid lightgrey;
          border-bottom: 1px solid lightgrey;
          padding: 2em;
          margin: 3.2em 0;
        }

        .Menu ul {
          display: flex;
          max-width: 968px;
          margin: auto;
        }

        .Menu li {
          margin-right: 1.6em;
        }

        .MenuItemSelected {
          font-weight: bold;
          color: #034752;
        }

        .Campaign,
        .FAQ {
          display: flex;
          max-width: 968px;
          margin: auto;
          justify-content: space-between;
          min-height: 50vh;
        }

        .Campaign h3,
        .FAQ h3 {
          font-size: 1.6em;
          margin: 0 0 0.8em 0;
          color: steel;
        }

        .About,
        .FAQ div {
          width: 64%;
        }

        .About p {
          margin: 0.8em 0;
        }

        .About ul {
          padding-left: 1.2em;
        }

        .About li,
        .About div {
          margin-bottom: .8em;
        }

        .VisionVideo * {
          max-width: 100%;
        }

        .AppPreview * {
          max-width: 100%;
        }

        .Support {
          width: 32%;
        }

        .Support h4 {
          font-weight: bold;
        }

        .Support button {
          text-align: left;
          margin: 1.6em 0;
          padding: 0.8em;
          background: #009e74;
          color: white;
          width: 100%;
        }

        .Support * {
          margin: 1.6em 0;
        }

        .FAQ p,
        .FAQ h4 {
          margin-bottom: 0.8em;
        }

        .FAQ p {
          margin-left: 1.2em;
          margin-right: 1.2em;
        }

        .Name {
          font-weight: bold;
        }

        .FAQ form {
          display: flex;
          flex-direction: column;
          width: 32%;
        }

        .FAQ a {
          color: #009e74;
        }

        .FAQ textarea {
          margin: 1.6em 0;
          padding: 0.8em;
          height: 40%;
          border: 1px solid lightgrey;
        }

        .FAQ input {
          margin: 1.6em 0;
          padding: 0.8em;
          border: 1px solid lightgrey;
        }

        footer p {
          margin: 2em 0;
          text-align: center;
        }

        @media only screen and (max-width: 768px) {
          .Headline,
          .HeroContainer,
          .Menu ul,
          .Campaign,
          .FAQ {
            max-width: 720px;
          }

          .HeroContainer {
            align-items: center;
          }
        }
        @media only screen and (max-width: 667px) {
          header h1 {
            font-weight: bold;
            color: #034752;
            padding: 0.4em;
          }

          .Headline {
            height: 100%;
            padding: 1.6em 0.8em;
            text-align: center;
          }

          .Headline p {
            display: none;
          }

          .Headline p {
            display: unset;
          }

          .Headline h2 {
            font-size: 1.6em;
            padding-bottom: 0.4em;
          }

          .HeroContainer {
            display: flex;
            flex-direction: column;
            width: 100%;
          }

          .HeroInfo,
          .HeroContainer img {
            text-align: center;
            width: 100%;
          }

          .HeroInfo {
            padding: 0.8em 0;
          }

          .Menu li {
            margin-right: auto;
            margin-left: auto;
          }

          .Campaign,
          .FAQ {
            flex-direction: column;
          }

          .About,
          .Support,
          .FAQ {
            width: 100%;
            margin-bottom: 1.6em;
          }

          .About ul {
            padding-left: 0.8em;
          }

          .About p,
          .About h3,
          .Support h3,
          .FAQ h3 {
            padding-left: 0.8em;
            padding-right: 0.8em;
          }

          .FAQ h4 {
            padding-left: 1.2em;
          }

          .FAQ {
            align-items: center;
          }

          .FAQ div,
          .FAQ form {
            min-width: 100%;
          }

          .FAQ textarea {
            margin-left: 0.8em;
            margin-right: 0.8em;
            height: 8em;
          }

          .FAQ input {
            margin-left: 0.8em;
            margin-right: 0.8em;
          }
        }
        @media only screen and (max-width: 374px) {
        }
      `}
    </style>
  );
}

export default Styles;
