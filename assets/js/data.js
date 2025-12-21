// Team Members Data
const teamMembers = [
    {
        name: "차지욱 교수님",
        role: "교수",
        email: "connectome@snu.ac.kr",
        department: "심리학과",
        degree: "Professor",
        research: ["연구 분야"],
        semester: "",
        room: "",
        phone: ""
    },
    {
        name: "이은지",
        role: "박사과정",
        studentId: "2023-30069",
        semester: "6학기",
        room: "M425",
        degree: "박사",
        email: "leee4321@snu.ac.kr",
        phone: "010-4032-9665",
        department: "심리학과",
        research: ["Genetics", "Neuroscience"]
    },
    {
        name: "김보겸",
        role: "박사과정",
        studentId: "2023-30843",
        semester: "5학기",
        room: "M519",
        degree: "박사",
        email: "amyk01@snu.ac.kr",
        phone: "010-7220-3647",
        department: "심리학과",
        research: ["Neuroscience", "Development", "Emotions"]
    },
    {
        name: "왕희환",
        role: "박사과정",
        studentId: "2024-31668",
        semester: "4학기",
        room: "M425",
        degree: "박사",
        email: "dhkdgmlghks@snu.ac.kr",
        phone: "010-8760-3310",
        department: "협동과정 인공지능",
        research: ["Foundation Model", "Emotions", "Neuroscience"]
    },
    {
        name: "배상윤",
        role: "석박사통합과정",
        studentId: "2021-28480",
        semester: "수료(2025.08/연구생)",
        room: "M519",
        degree: "석박",
        email: "stellasybae@snu.ac.kr",
        phone: "010-4137-4567",
        department: "협동과정 인공지능",
        research: ["Foundation Model"]
    },
    {
        name: "박정훈",
        role: "석박사통합과정",
        studentId: "2022-20895",
        semester: "7학기",
        room: "M425",
        degree: "석박",
        email: "utopie9090@snu.ac.kr",
        phone: "010-9058-4163",
        department: "협동과정 인공지능",
        research: ["QML"]
    },
    {
        name: "최승연",
        role: "박사과정",
        studentId: "2022-38387",
        semester: "수료(2024.02/연구생)",
        room: "M519",
        degree: "박사",
        email: "syunchoi@snu.ac.kr",
        phone: "010-5529-2722",
        department: "뇌인지과학과",
        research: ["Neuroscience", "Development", "Generative Model"]
    },
    {
        name: "박마리아",
        role: "박사과정",
        studentId: "2024-37802",
        semester: "3학기",
        room: "M425",
        degree: "박사",
        email: "pakmasha99@gmail.com",
        phone: "",
        department: "심리학과",
        research: ["QML", "Foundation Model"]
    },
    {
        name: "서정우",
        role: "석박사통합과정",
        studentId: "2022-27624",
        semester: "7학기",
        room: "M519",
        degree: "석박",
        email: "jungwoo.seo95@gmail.com",
        phone: "010-5162-2089",
        department: "뇌인지과학과",
        research: ["Foundation Model", "Generative Model"]
    },
    {
        name: "이승주",
        role: "박사과정",
        studentId: "2025-34622",
        semester: "1학기",
        room: "M519",
        degree: "박사",
        email: "ju980915@snu.ac.kr",
        phone: "010-6854-9810",
        department: "심리학과",
        research: ["Neuroscience", "Foundation Model"]
    }
];

// News Data
const newsItems = [
    {
        date: "2024-12-01",
        title: "Welcome New Members!",
        content: "We are excited to welcome new members to our lab this semester.",
        type: "latest"
    },
    {
        date: "2024-11-15",
        title: "Neuro-X Project Launch",
        content: "Our ambitious Neuro-X project has officially launched, aiming to develop a Large Brain Model.",
        type: "latest"
    },
    {
        date: "2024-10-20",
        title: "New Publication",
        content: "Our latest research on dynamic functional connectomes has been accepted for publication.",
        type: "latest"
    },
    {
        date: "2024-09-10",
        title: "Conference Presentation",
        content: "Lab members presented their research at the International Conference on Neuroscience.",
        type: "archive"
    },
    {
        date: "2024-08-05",
        title: "Summer Workshop",
        content: "Successfully completed our annual summer workshop on brain imaging techniques.",
        type: "archive"
    }
];

// Get unique values for filters
function getUniqueValues(field) {
    const values = new Set();
    teamMembers.forEach(member => {
        if (field === 'research') {
            member.research.forEach(r => values.add(r));
        } else {
            if (member[field]) values.add(member[field]);
        }
    });
    return Array.from(values).sort();
}

// Export data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { teamMembers, newsItems, getUniqueValues };
}
