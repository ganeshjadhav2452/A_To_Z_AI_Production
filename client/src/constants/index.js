import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';


let features = [
    {
        id: 1,
        featureHeading: "Text Generation",
        featureSubHeading: "TEXT SUMAMRY",
        featureDescription: " Summarize long text into short sentences",
        path: "/summary",
        icon: DescriptionRounded
    },
    {
        id: 2,
        featureHeading: "Parapgraph Generation",
        featureSubHeading: "Parapgraph",
        featureDescription: "Generate Paragraph with words",
        path: "/paragraph",
        icon: FormatAlignLeftOutlined
    },
    {
        id: 3,
        featureHeading: "AI ChatBot",
        featureSubHeading: "Chatbot",
        featureDescription: "Chat With AI Chatbot",
        path: "/chatbot",
        icon: ChatRounded
    },
    {
        id: 4,
        featureHeading: "Javascript Converter",
        featureSubHeading: "JS CONVERTER",
        featureDescription: "Trasnlate english to javascript code",
        path: "/js-converter",
        icon: CodeRoundedIcon
    },
    {
        id: 5,
        featureHeading: " AI SCIFI Images",
        featureSubHeading: " Scifi Image",
        featureDescription: "Generate Scifi images",
        path: "/scifi-image",
        icon: CollectionsRoundedIcon
    },
]

export {
    features
}