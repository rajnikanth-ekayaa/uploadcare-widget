// #
// # English locale is the default and used as a fallback.
// #
const translations = {
  uploading: 'अपलोड हो रहा है ... कृपया प्रतीक्षा करें।',
  loadingInfo: 'जानकारी लोड हो रही है ...',
  errors: {
    default: 'त्रुटि',
    baddata: 'गलत मान',
    size: 'फ़ाइल बहुत बड़ी है',
    upload: 'अपलोड नहीं कर सकते',
    user: 'अपलोड रद्द',
    info: 'जानकारी लोड नहीं कर सकते',
    image: 'केवल छवियों की अनुमति है',
    createGroup: 'फ़ाइल समूह नहीं बना सकते',
    deleted: 'फाइल नष्ट हो गयी थी'
  },
  draghere: 'फ़ाइल यहाँ ड्रॉप करें',
  file: {
    one: '% 1 फ़ाइल',
    other: '% 1 फाइलें'
  },
  buttons: {
    cancel: 'रद्द करें',
    remove: 'हटा दो',
    choose: {
      files: {
        one: 'एक फ़ाइल चुनें',
        other: 'फ़ाइलों का चयन करें'
      },
      images: {
        one: 'एक छवि चुनें',
        other: 'छवियां चुनें'
      }
    }
  },
  dialog: {
    close: 'बंद करे',
    openMenu: 'मेनू खोलें',
    done: 'समाप्त',
    showFiles: 'फ़ाइलें दिखाएँ',
    tabs: {
      names: {
        'empty-pubkey': 'स्वागत हे',
        preview: 'पूर्वावलोकन',
        file: 'स्थानीय फ़ाइलें',
        url: 'सीधा लिंक',
        camera: 'कैमरा',
        facebook: 'फेसबुक',
        dropbox: 'ड्रॉपबॉक्स',
        gdrive: 'गूगल ड्राइव',
        gphotos: 'गूगल फ़ोटो',
        instagram: 'इंस्टाग्राम',
        vk: 'वीके',
        evernote: 'Evernote',
        box: 'बाक्स',
        onedrive: 'OneDrive',
        flickr: 'फ़्लिकर',
        huddle: 'Huddle'
      },
      file: {
        drag: 'किसी भी फ़ाइल को <br> खींचें और छोड़ें',
        nodrop: 'अपने कंप्यूटर से फ़ाइलें अपलोड करें',
        cloudsTip: 'क्लाउड स्टोरेज <br> और सोशल नेटवर्क',
        or: 'या',
        button: 'एक स्थानीय फ़ाइल चुनें',
        also: 'या से चुनें'
      },
      url: {
        title: 'वेब से फ़ाइलें',
        line1: 'वेब से किसी भी फ़ाइल को पकड़ो।',
        line2: 'बस लिंक प्रदान करें।',
        input: 'अपना लिंक यहां पेस्ट करें ...',
        button: 'अपलोड'
      },
      camera: {
        title: 'वेब कैमरा से फाइल',
        capture: 'एक तस्वीर लें',
        mirror: 'आईना',
        startRecord: 'विडियो रेकार्ड करो',
        stopRecord: 'रुकें',
        cancelRecord: 'रद्द करें',
        retry: 'पुन: अनुमति का अनुरोध करें',
        pleaseAllow: {
          title: 'कृपया अपने कैमरे के लिए उपयोग की अनुमति दें',
          text:
            'आपको इस साइट से कैमरा एक्सेस की अनुमति देने के लिए कहा गया है।<br>' +
            'अपने कैमरे से चित्र लेने के लिए आपको इस अनुरोध को स्वीकार करना होगा।'
        },
        notFound: {
          title: 'कोई कैमरा नहीं मिला',
          text: 'ऐसा लगता है कि आपके पास इस उपकरण से जुड़ा कोई कैमरा नहीं है।'
        }
      },
      preview: {
        unknownName: 'अनजान',
        change: 'रद्द करें',
        back: 'वापस',
        done: 'जोड़े',
        unknown: {
          title: 'अपलोड हो रहा है ... कृपया पूर्वावलोकन की प्रतीक्षा करें।',
          done: 'पूर्वावलोकन छोड़ें और स्वीकार करें'
        },
        regular: {
          title: 'इस फ़ाइल को जोड़ें?',
          line1: 'आप ऊपर फ़ाइल जोड़ने वाले हैं।',
          line2: 'कृपया पुष्टि करें।'
        },
        image: {
          title: 'इस छवि को जोड़ें?',
          change: 'रद्द करें'
        },
        crop: {
          title: 'काट-छांट करें और इस चित्र को जोड़ने',
          done: 'होगया',
          free: 'नि: शुल्क',
          recommended: 'संस्तुत'
        },
        video: {
          title: 'इस वीडियो को जोड़ें?',
          change: 'रद्द करें'
        },
        error: {
          default: {
            title: 'उफ़',
            text: 'अपलोड के दौरान कुछ गड़बड़ हो गई।',
            back: 'कृपया पुन: प्रयास करें'
          },
          image: {
            title: 'केवल छवि फ़ाइलों को स्वीकार किया जाता है।',
            text: 'कृपया किसी अन्य फ़ाइल के साथ फिर से प्रयास करें।',
            back: 'छवि चुनें'
          },
          size: {
            title: 'आपके द्वारा चयनित फ़ाइल सीमा से अधिक है।',
            text: 'कृपया किसी अन्य फ़ाइल के साथ फिर से प्रयास करें।'
          },
          loadImage: {
            title: 'त्रुटि',
            text: 'छवि लोड नहीं कर सकता'
          }
        },
        multiple: {
          title: 'आपने चुना है %files%।',
          question: 'जोड़ें %files%?',
          tooManyFiles: 'आपने बहुत सी फाइलें चुनी हैं। %max% अधिकतम है।',
          tooFewFiles: 'आपने चुना है %files%। कम से कम %min% की आवश्यकता है।',
          clear: 'सभी हटाएं',
          done: 'जोड़ें',
          file: {
            preview: 'पूर्वावलोकन %file%',
            remove: 'हटा दो %file%',
            edit: 'संपादित करें %file%',
          }
        }
      }
    },
    footer: {
      text: 'powered by',
      link: 'uploadcare'
    }
  }
}

// Pluralization rules taken from:
// https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html
const pluralize = function(n) {
  if (n === 1) {
    return 'एक'
  }
  return 'अन्य'
}

export default { pluralize, translations }
