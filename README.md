# Translation App with Next.js, Chakra UI, and Google Translate API

This project is a web-based translation app built using Next.js and Chakra UI. It uses the Google Translate API provided by [Pawan.Krd](https://pawan.krd), allowing users to translate text from one language to another.

## Features

- Clean and intuitive user interface designed with Chakra UI.
- Translation of text between various languages using the Google Translate API.
- Language swap feature for quickly switching the 'from' and 'to' languages.

## How to Use

To translate text, enter your text in the text area and select the 'from' and 'to' languages from the drop-down menus. Then, click the 'Translate' button to get your translation.

You can also use the swap icon button to swap the 'from' and 'to' languages. If a translation has already been made, this will also trigger a new translation using the swapped languages and the previously translated text.

## Google Translate API

This app uses the Google Translate API provided by [Pawan.Krd](https://pawan.krd). You can use this API by sending an HTTP GET request to the following endpoint:

`https://api.pawan.krd/gtranslate`

### Query Parameters

- `from`: The language of the text query.
- `to`: The language you want to translate to.
- `text`: The text or paragraph you want to translate.

You can find the language codes [here](https://cloud.google.com/translate/docs/languages).

### Example

GET `https://api.pawan.krd/gtranslate?from=en&to=ckb&text=hello`

### Response

You will get a JSON response like this:

`{"status":true,"translated":"سڵاو","time":60}`

For more information, visit [https://discord.pawan.krd/](https://discord.pawan.krd/).

## Running the Project Locally

First, clone the repository:

```bash
git clone https://github.com/dnachavez/nextjs-gtranslation-app.git
```

Then, navigate to the project directory and install the dependencies:

```bash
cd nextjs-gtranslation-app
npm install
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Contributing

We welcome [contributions](CONTRIBUTING.md) to this project. Please feel free to submit issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
