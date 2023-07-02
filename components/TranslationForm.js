import { useState } from "react";
import {
  Box,
  Button,
  Select,
  Textarea,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { FaExchangeAlt } from "react-icons/fa";

const languages = {
  Afrikaans: "af",
  Albanian: "sq",
  Amharic: "am",
  Arabic: "ar",
  Armenian: "hy",
  Assamese: "as",
  Aymara: "ay",
  Azerbaijani: "az",
  Bambara: "bm",
  Basque: "eu",
  Belarusian: "be",
  Bengali: "bn",
  Bhojpuri: "bho",
  Bosnian: "bs",
  Bulgarian: "bg",
  Catalan: "ca",
  Cebuano: "ceb",
  "Chinese (Simplified)": "zh-CN",
  "Chinese (Traditional)": "zh-TW",
  Corsican: "co",
  Croatian: "hr",
  Czech: "cs",
  Danish: "da",
  Dhivehi: "dv",
  Dogri: "doi",
  Dutch: "nl",
  English: "en",
  Esperanto: "eo",
  Estonian: "et",
  Ewe: "ee",
  "Filipino (Tagalog)": "fil",
  Finnish: "fi",
  French: "fr",
  Frisian: "fy",
  Galician: "gl",
  Georgian: "ka",
  German: "de",
  Greek: "el",
  Guarani: "gn",
  Gujarati: "gu",
  "Haitian Creole": "ht",
  Hausa: "ha",
  Hawaiian: "haw",
  Hebrew: "he",
  Hindi: "hi",
  Hmong: "hmn",
  Hungarian: "hu",
  Icelandic: "is",
  Igbo: "ig",
  Ilocano: "ilo",
  Indonesian: "id",
  Irish: "ga",
  Italian: "it",
  Japanese: "ja",
  Javanese: "jv",
  Kannada: "kn",
  Kazakh: "kk",
  Khmer: "km",
  Kinyarwanda: "rw",
  Konkani: "gom",
  Korean: "ko",
  Krio: "kri",
  Kurdish: "ku",
  "Kurdish (Sorani)": "ckb",
  Kyrgyz: "ky",
  Lao: "lo",
  Latin: "la",
  Latvian: "lv",
  Lingala: "ln",
  Lithuanian: "lt",
  Luganda: "lg",
  Luxembourgish: "lb",
  Macedonian: "mk",
  Maithili: "mai",
  Malagasy: "mg",
  Malay: "ms",
  Malayalam: "ml",
  Maltese: "mt",
  Maori: "mi",
  Marathi: "mr",
  "Meiteilon (Manipuri)": "mni-Mtei",
  Mizo: "lus",
  Mongolian: "mn",
  "Myanmar (Burmese)": "my",
  Nepali: "ne",
  Norwegian: "no",
  "Nyanja (Chichewa)": "ny",
  "Odia (Oriya)": "or",
  Oromo: "om",
  Pashto: "ps",
  Persian: "fa",
  Polish: "pl",
  "Portuguese (Portugal, Brazil)": "pt",
  Punjabi: "pa",
  Quechua: "qu",
  Romanian: "ro",
  Russian: "ru",
  Samoan: "sm",
  Sanskrit: "sa",
  "Scots Gaelic": "gd",
  Sepedi: "nso",
  Serbian: "sr",
  Sesotho: "st",
  Shona: "sn",
  Sindhi: "sd",
  "Sinhala (Sinhalese)": "si",
  Slovak: "sk",
  Slovenian: "sl",
  Somali: "so",
  Spanish: "es",
  Sundanese: "su",
  Swahili: "sw",
  Swedish: "sv",
  "Tagalog (Filipino)": "tl",
  Tajik: "tg",
  Tamil: "ta",
  Tatar: "tt",
  Telugu: "te",
  Thai: "th",
  Tigrinya: "ti",
  Tsonga: "ts",
  Turkish: "tr",
  Turkmen: "tk",
  "Twi (Akan)": "ak",
  Ukrainian: "uk",
  Urdu: "ur",
  Uyghur: "ug",
  Uzbek: "uz",
  Vietnamese: "vi",
  Welsh: "cy",
  Xhosa: "xh",
  Yiddish: "yi",
  Yoruba: "yo",
  Zulu: "zu",
};

export default function TranslationForm({
  onTranslate,
  translation,
  setTranslation,
}) {
  const [text, setText] = useState("");
  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("tl");

  const handleTextChange = (event) => setText(event.target.value);
  const handleFromChange = (event) => setFrom(languages[event.target.value]);
  const handleToChange = (event) => setTo(languages[event.target.value]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onTranslate({ text, from, to });
  };

  const handleSwapLanguages = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setText(translation);
    if (text) {
      onTranslate({ text: translation, from: to, to: from });
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} marginBottom="8">
      <Textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text to translate"
        marginBottom="4"
        resize="none"
      />

      <VStack>
        <Select
          value={Object.keys(languages).find((key) => languages[key] === from)}
          onChange={handleFromChange}
          marginBottom="4"
        >
          {Object.keys(languages).map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </Select>

        <IconButton
          icon={<FaExchangeAlt />}
          onClick={handleSwapLanguages}
          aria-label="Swap languages"
          marginBottom="4"
        />

        <Select
          value={Object.keys(languages).find((key) => languages[key] === to)}
          onChange={handleToChange}
          marginBottom="4"
        >
          {Object.keys(languages).map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </Select>
      </VStack>

      <Button
        w="full"
        colorScheme="teal"
        type="submit"
        disabled={!text}
        marginTop="4"
      >
        Translate
      </Button>
    </Box>
  );
}
