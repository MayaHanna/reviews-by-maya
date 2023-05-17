const productTypeToHebrew :{ [key: string]: string  }= {
    cleanser: "סבון פנים",
    cleansing_balm: "באלם ניקוי",
    cleansing_oil: "שמן ניקוי",
    moisturizer: "קרם לחות",
    serum: "סרום",
    sunscreen: "קרם הגנה",
    eye_cream: "קרם עיניים",
    eye_patches: "רטיות לעיניים",
    face_mask: "מסכת פנים",
    lip_balm: "באלם לשפתיים",
    spot_treatment: "טיפול נקודתי",
    toner: "טונר",
    bb_cream: "ביבי קרים",
    blush: "סומק",
    body_wash: "סבון גוף",
    body_sunscreen: "קרם הגנה לגוף",
    bronzer: "ברונזר",
    foot_peeling: "פילינג לכפות הרגליים",
    hair_mask: "מסכת שיער",
    hair_treatment: "טיפול משקם לשיער",
    hand_cream: "קרם ידיים",
    hand_wash: "סבון ידיים",
    highlighter: "היילייטר",
    itch_calming: "ג'ל להרגעת עקיצות",
    lipgloss: "ליפגלוס",
    tool: "כלים ומכשירים"
}

const skinProblemToHebrew :{ [key: string]: string  }= {
    acne: "אקנה ופצעונים",
    antiaging: "אנטיאייג'ינג",
    broken_barrier: "מחסום עור שבור",
    dehydrated: "עור מיובש",
    pie: "PIE- כתמים אדומים אחרי פצעונים",
    pigmentation: "פיגמנטציה",
    redness: "אדמומיות",
    blackheads: "ראשים שחורים",
    keratosis_pilaris: "קרטוזיס פילאריס (עור תות)",
    puffy_eyes: "נפיחות מתחת לעיניים",
    sebaceous_filaments: "sebaceous filaments",
    texture: "טקסטורה",
    damaged_hair: "שיער פגום",
    dry_foot: "כפות רגליים יבשות",
    dry_hands: "ידיים יבשות",
    itch: "עקיצות וגירודים"
}

const skinTypeToHebrew :{ [key: string]: string  }= {
    oily: "שומני",
    dry: "יבש",
    combination: "מעורב",
    normal: "רגיל",
}

export {productTypeToHebrew, skinProblemToHebrew, skinTypeToHebrew};