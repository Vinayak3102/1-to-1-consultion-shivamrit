export type Language = 'en' | 'hi';

export interface TranslationType {
  nav: {
    whyOneToOne: string;
    conditions: string;
    process: string;
    booking: string;
    healer: string;
    faq: string;
    bookCta: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    subheadline: string;
    metaPoints: string[];
    bookBtn: string;
    whatsappBtn: string;
    trustItems: { title: string; subtitle: string }[];
  };
  slotBanner: {
    kicker: string;
    heading: string; // Exact line: "Book Your 1-to-1 Consultation Slot"
    subheading: string;
    badge1: string;
    badge2: string;
    directWhatsappBtn: string;
    callBtn: string;
    guaranteeText: string;
  };
  whyOneToOne: {
    kicker: string;
    title: string;
    subtitle: string;
    cards: {
      step: string;
      title: string;
      desc: string;
      highlight: string;
    }[];
  };
  conditions: {
    kicker: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      symptom: string;
      protocol: string;
    }[];
  };
  process: {
    kicker: string;
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      timeframe: string;
      desc: string;
    }[];
  };
  healer: {
    kicker: string;
    name: string;
    title: string;
    experience: string;
    bioParagraphs: string[];
    pillars: { label: string; value: string }[];
    locationLabel: string;
    locationValue: string;
  };
  videoTestimonials: {
    kicker: string;
    title: string;
    subtitle: string;
    watchReelBtn: string;
    fullTranscriptLabel: string;
    bookSimilarCaseCta: string;
    verifiedBadge: string;
    videos: {
      id: string;
      patientName: string;
      location: string;
      condition: string;
      quoteHeadline: string;
      keyOutcome: string;
      transcriptLines: string[];
    }[];
  };
  testimonials: {
    kicker: string;
    title: string;
    subtitle: string;
    items: {
      quote: string;
      patientName: string;
      city: string;
      condition: string;
      duration: string;
    }[];
  };
  faq: {
    kicker: string;
    title: string;
    subtitle: string;
    questions: { q: string; a: string }[];
  };
  socialPrompt: {
    buttonLabel: string;
    modalTitle: string;
    modalSubtitle: string;
    copyPromptBtn: string;
    copied: string;
  };
  footer: {
    tagline: string;
    address: string;
    disclaimer: string;
    rights: string;
  };
}

export const translations: Record<Language, TranslationType> = {
  // HINDI (ठेठ, शुद्ध एवं प्रामाणिक आध्यात्मिक-चिकित्सकीय हिंदी)
  hi: {
    nav: {
      whyOneToOne: "व्यक्तिगत (1-on-1) परामर्श क्यों?",
      conditions: "असाध्य रोग एवं चिकित्सा",
      process: "परामर्श प्रक्रिया",
      booking: "स्लॉट बुकिंग",
      healer: "रेकी ग्रांड मास्टर पारुल सुथार",
      faq: "शंका समाधान",
      bookCta: "1-टू-1 स्लॉट बुक करें",
    },
    hero: {
      badge: "असाध्य व जटिल रोगों के लिए वैदिक प्राण ऊर्जा चिकित्सा",
      headlinePart1: "क्या आप निरंतर दवाओं, इलाजों और प्रयासों के बाद भी",
      headlineHighlight: "गंभीर एवं पुरानी बीमारियों",
      headlinePart2: "से जूझ रहे हैं और कोई स्थायी समाधान नहीं मिल रहा?",
      subheadline:
        "तमाम डॉक्टरों, परीक्षणों और दवाइयों के उपरांत भी जब शरीर साथ न दे और मन असहाय अनुभव करे — तो रेकी ग्रांड मास्टर पारुल सुथार के साथ व्यक्तिगत (1-to-1) परामर्श लेकर अपने शरीर की आंतरिक प्राण शक्ति को जगाएं और रोग के मूल कारण का निवारण पाएं।",
      metaPoints: [
        "20+ वर्षों की समर्पित प्राण साधना",
        "100% पूर्णतः गोपनीय व्यक्तिगत संवाद",
        "ऑनलाइन वीडियो परामर्श एवं प्रत्यक्ष सूरत क्लिनिक",
        "विश्वव्यापी सुदूर (डिस्टेंस) प्राण हीलिंग सहायता",
      ],
      bookBtn: "अपना 1-to-1 परामर्श स्लॉट बुक करें",
      whatsappBtn: "व्हाट्सएप पर तुरंत संपर्क करें",
      trustItems: [
        { title: "20+ वर्ष साधना", subtitle: "समर्पित प्राण ऊर्जा एवं वैदिक रेकी" },
        { title: "1 to 1 गहन जांच", subtitle: "व्यक्तिगत 7-चक्र एवं ऑरा परीक्षण" },
        { title: "सूरत एवं विश्वभर", subtitle: "सूरत क्लिनिक सानिध्य एवं डिस्टेंस हीलिंग" },
      ],
    },
    slotBanner: {
      kicker: "सीमित दैनिक अपॉइंटमेंट",
      heading: "Book Your 1 to 1 Consultation Slot",
      subheading:
        "रेकी ग्रांड मास्टर पारुल सुथार के साथ अपनी बीमारी, मेडिकल रिपोर्ट्स और शारीरिक-मानसिक कष्टों पर बिना किसी जल्दबाजी के गहन, आत्मीय व गोपनीय चर्चा हेतु अपना स्लॉट सुरक्षित करें।",
      badge1: "🌐 ऑनलाइन वीडियो कॉल (देश-विदेश के सभी रोगियों हेतु)",
      badge2: "🏛️ प्रत्यक्ष क्लिनिक सानिध्य (सचिन, सूरत, गुजरात)",
      directWhatsappBtn: "व्हाट्सएप पर स्लॉट बुक करें",
      callBtn: "कॉल करें: +91 90163 30390",
      guaranteeText: "100% पूर्णतः गोपनीय संवाद · मेडिकल रिपोर्ट्स का सूक्ष्म ऊर्जा स्कैन · आत्मीय व निष्पक्ष मार्गदर्शन",
    },
    whyOneToOne: {
      kicker: "व्यक्तिगत प्राण ऊर्जा विज्ञान",
      title: "सामूहिक प्रार्थना की तुलना में 1 to 1 व्यक्तिगत परामर्श क्यों श्रेष्ठ है?",
      subtitle:
        "प्रत्येक मनुष्य का ऊर्जा क्षेत्र, शारीरिक प्रकृति और प्रारब्ध भिन्न होता है। ग्रांड मास्टर पारुल सुथार आपके सातों चक्रों, नाड़ी तंत्र और बीमारी के सूक्ष्म कारणों का गहराई से आमने-सामने व्यक्तिगत परीक्षण करती हैं।",
      cards: [
        {
          step: "01",
          title: "सप्त मुख्य चक्रों का सूक्ष्म प्राणिक स्कैन",
          desc: "शरीर के किस चक्र और नाड़ी में प्राण ऊर्जा अवरुद्ध (ब्लॉक) है और उसके कारण कौन-सा अंग रोगग्रस्त हो रहा है, इसका सटीक सूक्ष्म विश्लेषण।",
          highlight: "ऑरा व चक्र ब्लॉकेज परीक्षण",
        },
        {
          step: "02",
          title: "रोग के मूल भावनात्मक व कार्मिक कारणों की पहचान",
          desc: "दबा हुआ मानसिक तनाव, पुराना शोक, भय, पारिवारिक आघात या अवसाद जो समय के साथ गंभीर शारीरिक व्याधि बन जाता है, उसे पहचानकर मुक्त करना।",
          highlight: "मूल कारण (Root-Cause) निवारण",
        },
        {
          step: "03",
          title: "व्यक्तिगत हीलिंग योजना (रोडमैप)",
          desc: "आपकी वर्तमान एलोपैथिक दवाओं के साथ सामंजस्य बनाकर कितने दिनों की डिस्टेंस अथवा क्लिनिक हीलिंग की आवश्यकता होगी, इसका पारदर्शी मार्गदर्शन।",
          highlight: "अनुकूलित हीलिंग योजना",
        },
        {
          step: "04",
          title: "30 से 45 मिनट का शांत व आत्मीय संवाद",
          desc: "बिना किसी हड़बड़ाहट के पूरे धैर्य और श्रद्धा के साथ अपनी व्यथा, मेडिकल रिपोर्ट्स और जीवन शैली पर प्रत्यक्ष मार्गदर्शन प्राप्त करने का पवित्र अवसर।",
          highlight: "100% सुरक्षित व गोपनीय वातावरण",
        },
      ],
    },
    conditions: {
      kicker: "विशिष्ट चिकित्सा क्षेत्र",
      title: "किन गंभीर रोगों में 1-to-1 परामर्श से स्वास्थ्य लाभ संभव है?",
      subtitle:
        "जहाँ आधुनिक दवाएं सीमित राहत देती हैं, वहाँ दिव्य प्राण ऊर्जा शरीर की कोशिकाओं में पुनः चेतना और जीवनी शक्ति का संचार करती है।",
      items: [
        {
          id: "cancer",
          title: "कैंसर स्वास्थ्य लाभ एवं कीमोथेरेपी दुष्प्रभाव निवारण",
          symptom: "कीमोथेरेपी के बाद अत्यधिक कमजोरी, मितली, हीमोग्लोबिन क्षरण व ऊर्जा शून्यता",
          protocol: "कोशिकीय प्राण संचार, रक्षात्मक ऑरिक शील्ड एवं जीवनी शक्ति का पुनरुत्थान",
        },
        {
          id: "paralysis",
          title: "लकवा (पैरालिसिस), ब्रेन स्ट्रोक एवं नाड़ी दुर्बलता",
          symptom: "अंगों का सुन्न पड़ना, मोटर न्यूरॉन ब्लॉक, चलने-फिरने में लाचारी",
          protocol: "सुषुम्ना नाड़ी ऊर्जा संरेखण एवं तंत्रिका तंत्र की प्राण जागृति",
        },
        {
          id: "spine",
          title: "रीढ़ की हड्डी, साइटिका, स्लिप डिस्क एवं घुटनों का तीव्र दर्द",
          symptom: "L4-L5 डिस्क का संकुचन, नसों का दबना, असहनीय खिंचाव व चलने में असमर्थता",
          protocol: "रीढ़ की सूक्ष्म नाड़ियों का शुद्धिकरण एवं वात दोष शांति",
        },
        {
          id: "mental",
          title: "गंभीर अवसाद (डिप्रेशन), अत्यधिक चिंता व अनिद्रा",
          symptom: "लगातार नकारात्मक विचार, अज्ञात घबराहट, पैनिक अटैक व मानसिक अशांति",
          protocol: "आज्ञा व अनाहत चक्र शांति, अवचेतन मन की शुद्धि व मानसिक स्थिरता",
        },
        {
          id: "chronic",
          title: "दीर्घकालिक असाध्य रोग एवं शारीरिक दुर्बलता",
          symptom: "सालों पुराना पुराना दर्द, पाचन तंत्र की खराबी व अज्ञात शारीरिक शिथिलता",
          protocol: "समग्र प्राणिक विषहरण (डिटॉक्स), ऊर्जा संतुलन एवं आत्म-आरोग्य चेतना का जागरण",
        },
      ],
    },
    process: {
      kicker: "सरल एवं व्यवस्थित 3-चरणीय व्यवस्था",
      title: "आपके 1-to-1 परामर्श सत्र में क्या होगा?",
      subtitle: "पारदर्शी, आरामदायक, वैज्ञानिक और पवित्र आध्यात्मिक वातावरण में सत्र संपन्न होता है।",
      steps: [
        {
          number: "01",
          title: "सत्र-पूर्व आभा-मंडल (ऑरा) का सूक्ष्म स्कैन",
          timeframe: "नियत समय से 1 घंटा पूर्व",
          desc: "मरीज की तस्वीर और दी गई जानकारी के आधार पर पारुल जी एकाग्र ध्यान में आपके सप्त चक्रों और ऊर्जा क्षेत्र का सूक्ष्म अवलोकन करती हैं।",
        },
        {
          number: "02",
          title: "लाइव 1-to-1 संवाद (30 से 45 मिनट)",
          timeframe: "निर्धारित स्लॉट समय पर",
          desc: "वीडियो कॉल या क्लिनिक में मरीज व परिजनों के साथ विस्तृत चर्चा, चक्रों की वास्तविक स्थिति का स्पष्टीकरण और प्राथमिक शांतिदायक प्राण ऊर्जा का संचार।",
        },
        {
          number: "03",
          title: "व्यक्तिगत हीलिंग एवं जीवनशैली रूपरेखा",
          timeframe: "सत्र समापन के उपरांत",
          desc: "रोग निवारण हेतु आवश्यक हीलिंग चक्र, सात्विक खान-पान, मंत्र-ध्यान और सकारात्मक दिनचर्या का संपूर्ण मार्गदर्शन।",
        },
      ],
    },
    healer: {
      kicker: "उपचारक परिचय",
      name: "रेकी ग्रांड मास्टर पारुल सुथार",
      title: "संस्थापिका, शिवममृत हीलर्स · 20+ वर्षों की समर्पित प्राण साधना",
      experience: "20 से अधिक वर्षों का गहन प्राणिक, आध्यात्मिक एवं क्लिनिकल चिकित्सा अनुभव",
      bioParagraphs: [
        "रेकी ग्रांड मास्टर पारुल सुथार पारंपरिक उसुई एवं करुणा रेकी पद्धतियों में सर्वोच्च ग्रांड मास्टर उपाधि धारक हैं। उन्होंने अपने जीवन के दो दशकों से अधिक का समय प्राचीन वैदिक चक्र विज्ञान, प्राणिक ऊर्जा और असाध्य रोगों से त्रस्त मानवों के कल्याण में समर्पित किया है।",
        "उनका दृष्टिकोण किसी भी प्रकार के अंधविश्वास, ढोंग या खोखले चमत्कारी दावों से पूर्णतः मुक्त है — यह मानव शरीर के जैव-ऊर्जा क्षेत्र (Bio-Field) और भीतर छुपी आत्म-आरोग्यकारी चेतना को जागृत करने की विशुद्ध और प्रामाणिक विद्या पर आधारित है। आधुनिक चिकित्सा के साथ तालमेल बिठाकर वे असाध्य अवस्थाओं में भी आशा की किरण प्रज्वलित करती हैं।",
      ],
      pillars: [
        { label: "उपाधि व सिद्धि", value: "उसुई एवं करुणा रेकी ग्रांड मास्टर" },
        { label: "तपस्या व अनुभव", value: "20+ वर्ष निरंतर समर्पित साधना" },
        { label: "सेवा माध्यम", value: "प्रत्यक्ष सूरत क्लिनिक एवं ऑनलाइन विश्वव्यापी" },
      ],
      locationLabel: "पवित्र आरोग्य केंद्र का पता",
      locationValue: "शिवममृत हीलर्स सैंक्चुअरी, सचिन, सूरत, गुजरात - भारत",
    },
    videoTestimonials: {
      kicker: "मरीजों के साक्षात वीडियो अनुभव",
      title: "स्वास्थ्य लाभ प्राप्त कर चुके मरीजों की सच्ची जुबानी",
      subtitle: "रेकी ग्रांड मास्टर पारुल सुथार की प्राणिक चिकित्सा से असाध्य कष्टों से मुक्त हुए मरीजों के वास्तविक वीडियो वक्तव्य।",
      watchReelBtn: "वीडियो देखें (Watch Video)",
      fullTranscriptLabel: "मरीज का पूरा वक्तव्य",
      bookSimilarCaseCta: "इस समस्या के समाधान हेतु 1-to-1 परामर्श लें",
      verifiedBadge: "प्रमाणित मरीज वीडियो वक्तव्य",
      videos: [
        {
          id: "khushi-pcod",
          patientName: "खुशी (Khushi)",
          location: "गुजरात, भारत",
          condition: "हार्मोनल असंतुलन एवं गंभीर शारीरिक-मानसिक तनाव",
          quoteHeadline: "मासिक धर्म की गंभीर समस्या दूर हुई, स्वास्थ्य पूरी तरह सामान्य हुआ",
          keyOutcome: "शारीरिक स्फूर्ति एवं मानसिक एकाग्रता पुनः लौटी, अब पूरी ऊर्जा से अपनी पढ़ाई कर पा रही हैं।",
          transcriptLines: [
            "नमस्ते, मेरा नाम खुशी है। मुझे गंभीर हार्मोनल असंतुलन की समस्या थी।",
            "जिसके कारण मेरा मानसिक तनाव बहुत बढ़ गया था, शारीरिक स्वास्थ्य गिर रहा था और पढ़ाई पर गहरा असर पड़ रहा था।",
            "परंतु जब मैं रेकी ग्रांड मास्टर पारुल सुथार जी से मिली और उनसे हीलिंग ली, तो मेरी यह परेशानी जड़ से खत्म हो गई।",
            "मेरा स्वास्थ्य पूरी तरह सुधर गया, मानसिक शांति मिली और अब मैं पूरे ध्यान से अपनी पढ़ाई कर पा रही हूँ।",
            "इसके लिए मैं पारुल सुथार जी का हृदय से बहुत-बहुत धन्यवाद करती हूँ!"
          ]
        },
        {
          id: "jigisha-disc",
          patientName: "जिगीषा (Jigisha)",
          location: "महाराष्ट्र, भारत",
          condition: "रीढ़ की हड्डी (स्लिप डिस्क) का भयंकर दर्द एवं घुटनों की लाचारी",
          quoteHeadline: "डॉक्टरों ने सर्जरी अनिवार्य बताई थी; रेकी चिकित्सा से बिना ऑपरेशन पूरी तरह स्वस्थ",
          keyOutcome: "रीढ़ की सर्जरी टल गई, सहजता से चलना-फिरना व व्यायाम संभव हुआ, स्वयं अपना व्यापार संभाल रही हैं।",
          transcriptLines: [
            "नमस्ते, मेरा नाम जिगीषा है और मैं महाराष्ट्र की रहने वाली हूँ।",
            "कई वर्षों से मुझे रीढ़ की हड्डी में डिस्क की गंभीर समस्या थी और डॉक्टरों ने तुरंत ऑपरेशन कराने की सलाह दी थी।",
            "छोटे बच्चे होने के कारण मेरे लिए ऑपरेशन कराना संभव नहीं था, जिससे मैं भारी मानसिक तनाव में रहने लगी थी।",
            "न मैं चल पाती थी, न कोई काम कर पाती थी और घुटनों में भी असहनीय दर्द रहने लगा था।",
            "फिर एक परिचित के माध्यम से मेरा संपर्क रेकी ग्रांड मास्टर पारुल सुथार जी से हुआ।",
            "उन्होंने मेरा व्यक्तिगत परामर्श किया और रेकी से उपचार शुरू किया। आज मैं बिना किसी दर्द के आसानी से चल सकती हूँ, व्यायाम करती हूँ और अपना व्यवसाय भी सफलतापूर्वक चला रही हूँ।",
            "मुझे नया जीवन और स्वास्थ्य प्रदान करने के लिए पारुल सुथार जी का कोटि-कोटि धन्यवाद!"
          ]
        }
      ]
    },
    testimonials: {
      kicker: "रोगियों के वास्तविक अनुभव",
      title: "प्राण ऊर्जा से पुनः स्वास्थ्य लाभ के प्रामाणिक दृष्टांत",
      subtitle: "उन आत्मीय परिवारों के अनुभव जिनके जीवन में निराशा के अंधकार के बाद स्वास्थ्य का नया सवेरा आया।",
      items: [
        {
          quote:
            "कीमोथेरेपी के कठोर चक्रों के बाद मेरे पिताजी का शरीर अत्यंत दुर्बल हो गया था और भोजन पचना बंद हो गया था। पारुल जी के साथ 1-to-1 परामर्श के उपरांत नियमित सुदूर (डिस्टेंस) रेकी शुरू की गई। कुछ ही सप्ताह में उनकी भूख खुली, रक्त रिपोर्टों में चमत्कारी सुधार आया और वे स्वयं अपने पैरों पर खड़े हो सके।",
          patientName: "धर्मेश पंचाल",
          city: "सूरत, गुजरात",
          condition: "स्टेज-2 कैंसर सह-उपचार",
          duration: "45 दिवसीय उपचार चक्र",
        },
        {
          quote:
            "मस्तिष्क आघात (ब्रेन स्ट्रोक) के कारण अचानक मेरे दाहिने अंग ने काम करना बंद कर दिया था। डॉक्टरों ने लंबी फिजियोथेरेपी बताई थी पर सुधार नहीं दिख रहा था। पारुल जी द्वारा सुषुम्ना नाड़ी व तंत्रिका तंत्र की प्राण ऊर्जा शुद्धि के बाद उंगलियों में हरकत लौटी। आज मैं बिना सहारे के चल-फिर रहा हूँ।",
          patientName: "जितेंद्र शाह",
          city: "वडोदरा, गुजरात",
          condition: "स्ट्रोक एवं नाड़ी दुर्बलता सुधार",
          duration: "60 दिवसीय उपचार चक्र",
        },
        {
          quote:
            "रीढ़ की हड्डी के L4-L5 डिस्क में नसों के दबने से साइटिका का ऐसा असहनीय दर्द था कि बिस्तर से उठना भी दूभर हो गया था। पारुल जी के व्यक्तिगत परामर्श और ऊर्जा संतुलन से मेरा दर्द जड़ से शांत हुआ और ऑपरेशन की नौबत टल गई।",
          patientName: "सुरेशभाई पटेल",
          city: "अहमदाबाद, गुजरात",
          condition: "स्लिप डिस्क एवं साइटिका निवारण",
          duration: "30 दिवसीय हीलिंग",
        },
      ],
    },
    faq: {
      kicker: "शंका समाधान",
      title: "अक्सर पूछे जाने वाले महत्वपूर्ण प्रश्न",
      subtitle: "परामर्श स्लॉट आरक्षित करने से पूर्व आपके प्रत्येक प्रश्न का प्रामाणिक उत्तर।",
      questions: [
        {
          q: "क्या मैं अपनी चालू डॉक्टरी दवाओं और इलाज के साथ रेकी परामर्श ले सकता हूँ?",
          a: "हाँ, निसंदेह। रेकी एवं प्राण ऊर्जा चिकित्सा एक पूर्णतः प्राकृतिक, निरापद और पूरक (सप्लीमेंट्री) पद्धति है। हम कभी भी डॉक्टर द्वारा निर्धारित दवाइयाँ बंद करने के लिए नहीं कहते। यह चिकित्सा दवाओं के दुष्प्रभावों (Side Effects) को घटाती है और शरीर की रोग-प्रतिरोधक क्षमता को बढ़ाकर उपचार को त्वरित गति देती है।",
        },
        {
          q: "क्या ऑनलाइन वीडियो परामर्श उतना ही प्रभावशाली होता है जितना प्रत्यक्ष मिलना?",
          a: "हाँ, बिल्कुल बराबर प्रभावशाली है। वैदिक प्राण विज्ञान और आधुनिक क्वांटम ऊर्जा सिद्धांतों के अनुसार चेतना और प्राण ऊर्जा किसी भौगोलिक दूरी अथवा सीमाओं से बंधी नहीं है। ग्रांड मास्टर पारुल सुथार के 70% से अधिक गंभीर रोगी देश-विदेश के विभिन्न प्रांतों से ऑनलाइन माध्यम से ही पूर्ण स्वास्थ्य लाभ प्राप्त करते हैं।",
        },
        {
          q: "परामर्श सत्र से पूर्व मरीज अथवा परिजनों को क्या तैयारी रखनी चाहिए?",
          a: "सत्र के समय किसी शांत एवं एकांत स्थान पर बैठें जहाँ कोई बाधा न हो। अपनी हालिया मेडिकल जांच रिपोर्ट्स (एमआरआई, ब्लड टेस्ट, सीटी स्कैन आदि) पास रखें। यदि मरीज स्वयं बात करने की स्थिति में न हो, तो परिवार का कोई निकट सदस्य उनकी हालिया स्पष्ट तस्वीर के साथ उपस्थित रह सकता है।",
        },
        {
          q: "परामर्श स्लॉट बुक करने के बाद आगे की क्या प्रक्रिया होगी?",
          a: "जैसे ही आप व्हाट्सएप अथवा फोन द्वारा अपना स्लॉट बुक करते हैं, हमारी संस्था की ओर से आपको नियत समय, वीडियो कॉल लिंक अथवा क्लिनिक का पूरा पता भेज दिया जाता है। निर्धारित समय पर पारुल जी स्वयं आपसे रूबरू होकर पूरा समय देती हैं।",
        },
      ],
    },
    socialPrompt: {
      buttonLabel: "सोशल मीडिया विज्ञापन निर्देश देखें",
      modalTitle: "शिवममृत हीलर्स — उच्च-प्रभाव सोशल मीडिया विज्ञापन प्रारूप",
      modalSubtitle: "Instagram, Facebook एवं WhatsApp प्रचार हेतु संपूर्ण रचनात्मक निर्देश",
      copyPromptBtn: "संपूर्ण प्रॉम्प्ट कॉपी करें",
      copied: "सफलतापूर्वक कॉपी हो गया!",
    },
    footer: {
      tagline: "शिवममृत हीलर्स — रेकी ग्रांड मास्टर पारुल सुथार द्वारा संचालित पवित्र प्राण ऊर्जा आरोग्य केंद्र",
      address: "पवित्र आरोग्य केंद्र: सचिन, सूरत, गुजरात, भारत",
      disclaimer:
        "सांविधिक अस्वीकरण (Disclaimer): रेकी एवं आध्यात्मिक बायो-एनर्जी चिकित्सा पूरक एवं प्राकृतिक आरोग्य पद्धतियां हैं। यह किसी योग्य एलोपैथिक चिकित्सक के चिकित्सकीय निदान, नुस्खे अथवा शल्य चिकित्सा का विकल्प नहीं हैं। आपातकालीन स्थिति में सदैव नजदीकी अस्पताल या विशेषज्ञ चिकित्सक से परामर्श लें।",
      rights: "© 2026 शिवममृत हीलर्स। सर्वाधिकार सुरक्षित।",
    },
  },

  // ENGLISH
  en: {
    nav: {
      whyOneToOne: "Why 1 to 1",
      conditions: "Conditions",
      process: "Protocol",
      booking: "Slot Booking",
      healer: "About Parul Suthar",
      faq: "FAQ",
      bookCta: "Book Your 1-to-1 Slot",
    },
    hero: {
      badge: "Holistic Healing for Critical Health Conditions",
      headlinePart1: "Struggling with",
      headlineHighlight: "Critical or Chronic Health Problems",
      headlinePart2: "despite regular treatments, medicines, and repeated efforts?",
      subheadline:
        "Even after treatments, medications, and multiple consultations you still feel stuck, helpless, and searching for answers. Awaken the body's natural bio-energy with Reiki Grand Master Parul Suthar.",
      metaPoints: [
        "20+ Years Healing Sadhana",
        "100% Confidential 1-on-1 Dialogue",
        "Online Video or In-Sanctuary (Surat)",
      ],
      bookBtn: "Book Your 1-to-1 Consultation Slot",
      whatsappBtn: "Direct WhatsApp Inquiry",
      trustItems: [
        { title: "20+ Years", subtitle: "Consecrated Sadhana & Healing" },
        { title: "1-to-1 Depth", subtitle: "Private 7-Chakra Auric Diagnostic" },
        { title: "Dual Delivery", subtitle: "Surat Sanctum & Worldwide Distance" },
      ],
    },
    slotBanner: {
      kicker: "Reserve Individual Time",
      heading: "Book Your 1-to-1 Consultation Slot",
      subheading:
        "Reserve private, unhurried bio-energetic consultation with Reiki Grand Master Parul Suthar directly via WhatsApp or phone call.",
      badge1: "🌐 Online Video Consultation",
      badge2: "🏛️ In-Sanctuary Session (Sachin, Surat)",
      directWhatsappBtn: "Book Slot on WhatsApp",
      callBtn: "Call Now: +91 90163 30390",
      guaranteeText: "Strictly confidential · Detailed medical report review · Live energy attunement",
    },
    whyOneToOne: {
      kicker: "Individualized Bio-Energetic Care",
      title: "Why a 1 to 1 Consultation Trumps Generic Sessions",
      subtitle:
        "No two biological energy fields carry the same karmic or cellular imprint. A private consultation with Grand Master Parul Suthar isolates the specific energetic blockage behind chronic symptoms.",
      cards: [
        {
          step: "01",
          title: "Deep 7-Chakra Auric Mapping",
          desc: "Precise etheric diagnostic identifying exactly where vital Prana has stagnated and how it manifests in the physical organs.",
          highlight: "Bio-Field Diagnostics",
        },
        {
          step: "02",
          title: "Root Emotional & Karmic Unknotting",
          desc: "Uncovering suppressed grief, cellular trauma, or long-standing nervous tension that resists standard pharmaceuticals.",
          highlight: "Root-Cause Clearing",
        },
        {
          step: "03",
          title: "Customized Recovery Blueprint",
          desc: "A transparent, structured timeline detailing whether remote daily transmission, yantra attunement, or sanctuary visits are required.",
          highlight: "Tailored Protocol",
        },
        {
          step: "04",
          title: "30 to 45 Minutes of Unhurried Focus",
          desc: "A calm, non-judgmental sacred space where you and your family can discuss reports and symptoms with Parul ji directly.",
          highlight: "100% Sacred Confidentiality",
        },
      ],
    },
    conditions: {
      kicker: "Clinical & Energetic Focus",
      title: "Complex Conditions Welcomed for 1-to-1 Consultation",
      subtitle:
        "Complementary Pranic restoration designed for individuals and families confronting stubborn, exhausting health battles.",
      items: [
        {
          id: "cancer",
          title: "Cancer Care & Chemo Side-Effects Support",
          symptom: "Severe fatigue, nausea, blood count crashes, emotional trauma",
          protocol: "Cellular Prana infusion, auric shielding, and vitality reinforcement",
        },
        {
          id: "paralysis",
          title: "Paralysis, Stroke & Motor Nerve Recovery",
          symptom: "Limb numbness, motor dysfunction, post-stroke weakness",
          protocol: "Sushumna nervous alignment, etheric pathway activation",
        },
        {
          id: "infertility",
          title: "Infertility, PCOS & Hormonal Harmony",
          symptom: "Failed cycles, pelvic stagnation, menstrual irregularities",
          protocol: "Sacral (Svadhisthana) chakra clearing and reproductive realignment",
        },
        {
          id: "spine",
          title: "Acute Lumbar, Sciatica & Spine Inflammation",
          symptom: "L4-L5 disc compression, shooting pain, mobility restrictions",
          protocol: "Spinal energetic decompression and inflammatory stagnation release",
        },
        {
          id: "mental",
          title: "Severe Anxiety, Trauma & Chronic Fatigue",
          symptom: "Panic episodes, emotional heaviness, broken sleep cycles",
          protocol: "Ajna & Anahata soothing, subconscious fear transmutation",
        },
      ],
    },
    process: {
      kicker: "Structured 3-Stage Experience",
      title: "What Happens During Your 1-to-1 Session?",
      subtitle: "A professional, reverent, and scientifically disciplined consultation protocol.",
      steps: [
        {
          number: "01",
          title: "Pre-Call Auric Scanning",
          timeframe: "1 Hour Prior to Session",
          desc: "Parul ji performs a preliminary remote energy scan using the patient's photograph and reported symptoms to map primary chakras.",
        },
        {
          number: "02",
          title: "Live 1-to-1 Dialogue (30–45 Mins)",
          timeframe: "At Scheduled Slot",
          desc: "Detailed discussion on symptoms, emotional stressors, chakra blockage explanation, and an immediate calming Pranic attunement.",
        },
        {
          number: "03",
          title: "Personalized Recovery Blueprint",
          timeframe: "Post-Consultation",
          desc: "You receive a structured recommendation regarding required healing cycles, lifestyle/dietary guidance, and daily affirmations.",
        },
      ],
    },
    healer: {
      kicker: "About the Healer",
      name: "Reiki Grand Master Parul Suthar",
      title: "Founder, ShivAmrit Healers · 20+ Years Sadhana",
      experience: "20+ Years of Bio-Energetic Mastery & Patient Care",
      bioParagraphs: [
        "Reiki Grand Master Parul Suthar holds master credentials in both traditional Usui Shiki Ryoho and Karuna Reiki systems. She has spent over twenty years immersed in intense spiritual sadhana, studying the intricate subtle energy pathways of the human bio-field.",
        "Rejecting superstition and sensationalist claims, Parul ji brings a dignified, grounded perspective to holistic healing. Her practice works hand-in-hand with medical science to awaken the body's innate self-healing intelligence.",
      ],
      pillars: [
        { label: "Credentials", value: "Usui & Karuna Reiki Grand Master" },
        { label: "Sadhana Horizon", value: "20+ Consecrated Years" },
        { label: "Consultation Reach", value: "In-Person Sanctuary & Online" },
      ],
      locationLabel: "Consecrated Sanctuary Address",
      locationValue: "ShivAmrit Healers Sanctuary, Sachin, Surat, Gujarat, India",
    },
    videoTestimonials: {
      kicker: "Real Patient Video Proof",
      title: "Watch Authentic Patient Recovery Stories",
      subtitle: "Unscripted, heartfelt video testimonials from patients who regained health through Grand Master Parul Suthar's bio-energy guidance.",
      watchReelBtn: "Watch Video Testimonial",
      fullTranscriptLabel: "Spoken Transcript",
      bookSimilarCaseCta: "Book Consultation for this Condition",
      verifiedBadge: "Verified Patient Video Review",
      videos: [
        {
          id: "khushi-pcod",
          patientName: "Khushi",
          location: "Gujarat, India",
          condition: "PCOD & Hormonal Imbalance (Irregular Menstrual Cycles)",
          quoteHeadline: "PCOD Problem Completely Resolved, Normal Menstrual Cycles Restored",
          keyOutcome: "Physical vitality and emotional balance restored, able to focus deeply on studies.",
          transcriptLines: [
            "Hey everyone, my name is Khushi and I was having a PCOD problem.",
            "Because of this, my mental health, physical health, and my studies were suffering a lot.",
            "But after meeting Grand Master of Reiki, Parul Suthar, my problem was cured.",
            "I started having regular periods every single month. My physical and mental health normalized.",
            "Because of this, I can now focus on my studies with complete clarity.",
            "So thank you, thank you so much Parul Suthar!"
          ]
        },
        {
          id: "jigisha-disc",
          patientName: "Jigisha",
          location: "Maharashtra, India",
          condition: "Severe Spinal Disc Problem & Chronic Knee Strain",
          quoteHeadline: "Doctors Recommended Spine Surgery; Completely Healed Through Reiki Without Operation",
          keyOutcome: "Avoided spinal surgery, restored independent walking & exercise, running business with ease.",
          transcriptLines: [
            "Hello everyone, my name is Jigisha and I am from Maharashtra.",
            "For many years I suffered from severe Disc problem and doctors suggested spinal operation.",
            "However, I could not undergo surgery because my children were very young.",
            "This caused immense mental stress, inability to walk or exercise, and severe knee strain.",
            "Through a reference, I connected with Reiki Grand Master Parul Suthar.",
            "She consulted me and healed me through Reiki. Now I can easily walk, do light exercise, and run my business comfortably.",
            "Thank you so much Parul Suthar for providing such caring consultation and a renewed life!"
          ]
        }
      ]
    },
    testimonials: {
      kicker: "Documented Recovery Stories",
      title: "Evidence of Restored Vitality & Hope",
      subtitle: "Real stories from families across Gujarat, Mumbai, and abroad.",
      items: [
        {
          quote:
            "After aggressive chemotherapy, my father was completely bedridden with extreme nausea and low WBC counts. Parul ji's daily sessions brought a turnaround within weeks. His doctors were genuinely surprised.",
          patientName: "Dharmesh Panchal",
          city: "Surat, Gujarat",
          condition: "Stage-2 Cancer Support",
          duration: "45 Days Protocol",
        },
        {
          quote:
            "A sudden stroke paralyzed my right side. Regaining finger movement felt impossible. Through Parul ji's focused neurological energy realignment, I regained control and can walk independently now.",
          patientName: "Jitendra Shah",
          city: "Vadodara, Gujarat",
          condition: "Post-Stroke Motor Recovery",
          duration: "60 Days Protocol",
        },
        {
          quote:
            "After 7 years of heartbreaking fertility treatments, we felt drained. Parul ji unblocked my sacral chakra and relieved years of unspoken fear. We are now blessed with a healthy baby boy.",
          patientName: "Priya & Nikhil Joshi",
          city: "Mumbai",
          condition: "Infertility & Hormonal Recovery",
          duration: "3-Month Protocol",
        },
      ],
    },
    faq: {
      kicker: "Frequently Asked Questions",
      title: "Clear Answers for Your Family's Decision",
      subtitle: "Everything you need to know before securing your consultation.",
      questions: [
        {
          q: "Can Reiki consultation run alongside ongoing hospital treatments?",
          a: "Yes, absolutely. Pranic and Reiki healing is strictly non-invasive and complementary. It does not replace medical therapies; instead, it strengthens cellular vitality, improves chemo tolerance, and expedites surgical wound recovery.",
        },
        {
          q: "How effective is an Online Video consultation compared to In-Person?",
          a: "Equally effective. Under quantum non-locality and Vedic Prana principles, bio-energy is not constrained by geographic distance. Over 65% of Parul ji's long-term recoveries are with remote patients worldwide.",
        },
        {
          q: "What should I have prepared for the consultation call?",
          a: "Ensure a quiet room with good internet/phone connectivity, your recent medical reports (scans, pathology), and a clear recent photo of the patient if distance scanning is requested.",
        },
        {
          q: "What happens after booking my slot?",
          a: "Our sanctum coordinator directly connects via WhatsApp to share the meeting video link or clinic map and confirm your timing.",
        },
      ],
    },
    socialPrompt: {
      buttonLabel: "View Social Media Ad Prompt",
      modalTitle: "Shivamrit Healers — High-Converting Social Media Design Prompt",
      modalSubtitle: "Complete 4K Creative Direction, Ad Copy & WhatsApp Funnel Script",
      copyPromptBtn: "Copy Full Creative Prompt",
      copied: "Copied to Clipboard!",
    },
    footer: {
      tagline: "ShivAmrit Healers — Holistic Energy Sanctuary by Reiki Grand Master Parul Suthar",
      address: "Sanctuary Clinic: Sachin, Surat, Gujarat, India",
      disclaimer:
        "Disclaimer: Reiki and spiritual bio-energy healing are complementary practices intended to support overall well-being. They do not constitute licensed medical diagnoses, prescription advice, or surgical interventions. Always consult qualified medical practitioners for medical emergencies.",
      rights: "© 2026 ShivAmrit Healers. All Rights Reserved.",
    },
  },
};

// Social media prompt details requested by user
export const socialMediaDesignPrompt = {
  title: "ShivAmrit Healers 1-to-1 Consultation Booking — 4K Ad Creative Prompt",
  aspectRatios: "1:1 (Instagram Feed / WhatsApp Status) & 9:16 (Stories / Reels Cover)",
  style: "Premium, Modern Minimalist, Bold Bright Clear (BBC), 4K Cinematic Quality",
  palette: "Midnight Indigo (#050B14), Sacred Warm Gold (#D4AF37), Divine Ivory (#FDFBF7)",
  designPromptText: `Ultra-high-definition, 4K commercial editorial photography and luxury design layout for "ShivAmrit Healers". 

SUBJECT & COMPOSITION:
A warm, dignified Indian female Reiki Grand Master (Parul Suthar, in her 40s-50s) seated peacefully in a serene, consecrated Indian healing sanctuary. She is wearing an elegant traditional saffron-cream or off-white silk kurti with delicate gold embroidery, hands in a calm Namaste or relaxed Gyan Mudra. Natural, soft ambient morning sunlight streaming through minimalist wooden jali or architectural arches. Authentic, peaceful expression — genuine warmth, compassion, and divine presence. Realistic Indian skin texture, natural soft lighting, zero artificial plastic sheen, zero neon fairy glows.

BACKGROUND:
Subtle sacred sanctum elements: a brass Urli with floating white lotus petals and warm glowing ghee diyas in the soft-focus bokeh background. Minimalist slate-blue wall with subtle warm ambient tones. 

GRAPHIC OVERLAY & TYPOGRAPHY:
- Clean luxury typographic hierarchy.
- Top Corner: Official ShivAmrit Healers emblem (Golden Lotus & Sacred Geometry).
- Bold Headline (BBC Style): "Book Your 1-to-1 Consultation Slot" / "जब दवाएं और इलाज थक जाएं — 1-to-1 व्यक्तिगत प्राण ऊर्जा परामर्श स्लॉट बुक करें".
- Sub-points with clean typographic dots (·): "Reiki Grand Master Parul Suthar · 20+ Years Sadhana · Cancer, Stroke & Chronic Pain Support · Online Video & Surat Clinic".
- High-Conversion CTA Button: "Book Your 1-on-1 Slot | Limited Daily Slots | Click to Reserve"

MOOD & LIGHTING:
Reverent, clinical-grade spiritual serenity, grounded in authentic Vedic science and modern hope. 4K Hasselblad medium format color grading, crisp focal clarity, deep midnight navy and refined gold palette.`,
  adCopyHindi: `✨ जब दवाइयाँ, रिपोर्ट्स और इलाज के बाद भी शरीर साथ न दे...
तब आवश्यकता होती है पवित्र प्राण ऊर्जा और सप्त चक्रों के सूक्ष्म परीक्षण की।

🌿 रेकी ग्रांड मास्टर पारुल सुथार (20+ वर्ष समर्पित साधना) के साथ व्यक्तिगत (1-to-1) परामर्श स्लॉट आरक्षित करें।
👉 Book Your 1-to-1 Consultation Slot!

विशेष सहायता:
🔹 कैंसर स्वास्थ्य लाभ एवं कीमोथेरेपी दुष्प्रभाव निवारण
🔹 पैरालिसिस (लकवा) एवं स्ट्रोक नर्वस रिकवरी
🔹 रीढ़ की हड्डी (स्लिप डिस्क), साइटिका एवं जोड़ों का असहनीय दर्द
🔹 गंभीर डिप्रेशन, चिंता एवं अनिद्रा
🔹 दीर्घकालिक असाध्य व पुरानी बीमारियां

📍 प्रत्यक्ष क्लिनिक: सचिन, सूरत (गुजरात) | 🌐 देश-विदेश हेतु ऑनलाइन वीडियो परामर्श।
👉 व्हाट्सएप पर स्लॉट बुक करें: +91 90163 30390`,
  adCopyEnglish: `✨ When Medical Answers Feel Exhausted — Reclaim Vital Health Through Sacred Pranic Alignment.

Book Your 1-to-1 Consultation Slot with Reiki Grand Master Parul Suthar (ShivAmrit Healers).
20+ Years of Dedicated Sadhana · Individual Auric Diagnostics · Confidential Guidance.

Specialized Focus:
✔️ Cancer Care & Chemo Fatigue Support
✔️ Paralysis & Post-Stroke Motor Recovery
✔️ Chronic Sciatica & Spine Decompression
✔️ Severe Anxiety, Trauma & Sleep Restoration
✔️ Chronic & Stubborn Ailments

📍 In-Person Sanctum: Sachin, Surat | 🌐 Worldwide Online Video Sessions
👉 Reserve your consultation slot today on WhatsApp: +91 90163 30390.`
};
