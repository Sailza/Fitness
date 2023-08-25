import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program One",
        info: "Fitness Session",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Program Two",
        info: "Choose Your Trainer",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Program Three",
        info: "Get Your Diet Plan",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Program Four",
        info: "Work-Out Daily",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "By incorporating a variety of exercises and yoga practices,fitness clubs offer a comprehensive approach to physical and mental well-being."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "Always consult with fitness professionals or instructors to ensure that you're performing exercises and yoga poses correctly and safely, especially if you're new to these activities or have any health concerns."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "offer workshops, seminars, and educational resources on various health and fitness topics, empowering you with knowledge."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: " A well-rounded diet provides essential vitamins, minerals, proteins, carbohydrates, fats, and fiber, supporting optimal bodily functions and preventing nutrient deficiencies."
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "The frequency of exercise depends on various factors, including your fitness goals, current fitness level, age, and overall health."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "The best time to work out depends on your personal schedule, preferences, and goals. Both morning and evening workouts have their benefits, so consider what aligns with your lifestyle and what helps you stay consistent."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "The duration of your workouts can vary depending on your fitness goals, fitness level, type of exercise, and time availability"
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Yes, warming up before your workouts is essential for several reasons. A proper warm-up helps prepare your body physically and mentally for exercise, reducing the risk of injuries and enhancing your overall workout performance."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "The choice between strength training, cardio, or both depends on your fitness goals, preferences, and overall health. Each type of exercise offers unique benefits, and incorporating both into your routine can lead to a well-rounded fitness program."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Yes, lifting weights is a highly effective and commonly used method for strength training. Weightlifting involves using various types of resistance, such as dumbbells, barbells, kettlebells, and resistance machines, to challenge your muscles and promote strength and muscle growth.."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Joining this fitness club has been an incredible journey for me. The trainers are not just experts in their field, but they genuinely care about your progress. The variety of classes keeps things interesting, and the community vibe is so motivating. I've seen amazing results in my strength and overall fitness. Highly recommend!",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "I've been a member of this fitness club for over a year, and I can't imagine my life without it. The facilities are top-notch, and the trainers are always there to push me to my limits. The best part is the sense of camaraderie among members. It's not just a gym; it's a second home where we all support each other.",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "As a busy professional, finding time to work out was tough. But this fitness club's flexible class schedules and variety of workouts have made it possible. The trainers are so knowledgeable, and the positive environment keeps me motivated. I've lost weight, gained muscle, and my stress levels have significantly decreased. So thankful I found this place!",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "This fitness club is a game-changer. The attention to detail and the emphasis on safety during workouts impressed me. The trainers take the time to explain exercises and make sure you're doing them right. I've gained strength, improved my posture, and my overall confidence has soared. It's more than a gym—it's a supportive family!",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "I was hesitant to join a fitness club, but this one made me feel at ease right from the start. The trainers took the time to understand my goals and limitations. They've helped me overcome challenges and push my boundaries. I've lost weight, gained strength, and the best part is, I enjoy the process!",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]