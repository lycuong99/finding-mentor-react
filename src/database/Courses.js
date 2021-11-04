let courses = [
    {
        "id": 0,
        "name": "course 0",
        "price": 10,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
        "subjectId": "GDS001",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
    },
    {
        "id": 1,
        "name": "course 1",
        "price": 5,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 5,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg",
        "subjectId": "MKT001",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
    },
    {
        "id": 2,
        "name": "course 2",
        "price": 2,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 3,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
        "subjectId": "GDS002",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
    },
    {
        "id": 3,
        "name": "course 3",
        "price": 20,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg",
        "subjectId": "MKT002",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
    },
    {
        "id": 4,
        "name": "course 4",
        "price": 16,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 5,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
        "subjectId": "GDS003",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
    },
    {
        "id": 5,
        "name": "course 5",
        "price": 18.7,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 3,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg",
        "subjectId": "MKT003",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
    },
    {
        "id": 6,
        "name": "course 6",
        "price": 21.4,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 5,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
        "subjectId": "GDS004",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
    },
    {
        "id": 7,
        "name": "course 7",
        "price": 24.1,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg",
        "subjectId": "MKT004",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
    },
    {
        "id": 8,
        "name": "course 8",
        "price": 26.8,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
        "subjectId": "GDS005",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
    },
    {
        "id": 9,
        "name": "course 9",
        "price": 29.5,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg",
        "subjectId": "MKT005",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b066",  name: "Loioc" }
    },
    {
        "id": 10,
        "name": "course 10",
        "price": 32.2,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
        "subjectId": "GDS006",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
    },
    {
        "id": 11,
        "name": "course 11",
        "price": 34.9,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg",
        "subjectId": "MKT006",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
    },
    {
        "id": 12,
        "name": "course 12",
        "price": 37.6,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
        "subjectId": "GDS007",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
    },
    {
        "id": 13,
        "name": "course 13",
        "price": 40.3,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg",
        "subjectId": "MKT007",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
    },
    {
        "id": 14,
        "name": "course 14",
        "price": 43,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
        "subjectId": "GDS008",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
    },
    {
        "id": 15,
        "name": "course 15",
        "price": 45.7,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg",
        "subjectId": "MKT008",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250422b061", name: "Ly Van Cuong" }
    },
    {
        "id": 16,
        "name": "course 16",
        "price": 48.4,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
        "subjectId": "GDS009",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09251222b061", name: "Ly Van Cuong" }
    },
    {
        "id": 17,
        "name": "course 17",
        "price": 51.1,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg",
        "subjectId": "MKT009",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-0925s222b061", name: "Ly Van Cuong" }
    },
    {
        "id": 18,
        "name": "course 18",
        "price": 53.8,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
        "subjectId": "GDS010",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250a22b061", name: "Ly Van Cuong" }
    },
    {
        "id": 19,
        "name": "course 19",
        "price": 56.5,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg",
        "subjectId": "MKT010",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250v22b061", name: "NAME" }
    },
    {
        "id": 20,
        "name": "course 20",
        "price": 59.2,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
        "subjectId": "GDS011",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b161", name: "NAME" }
    },
    {
        "id": 21,
        "name": "course 21",
        "price": 61.9,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg",
        "subjectId": "MKT011",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b011", name: "NAME" }
    },
    {
        "id": 22,
        "name": "course 22",
        "price": 64.6,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
        "subjectId": "GDS012",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b041", name: "NAME" }
    },
    {
        "id": 23,
        "name": "course 23",
        "price": 67.3,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg",
        "subjectId": "MKT012",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b071", name: "NAME" }
    },
    {
        "id": 24,
        "name": "course 24",
        "price": 70,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
        "subjectId": "GDS013",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b062", name: "NAME" }
    },
    {
        "id": 25,
        "name": "course 25",
        "price": 72.7,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg",
        "subjectId": "MKT013",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b062", name: "Ly Van Cuong" }
    },
    {
        "id": 26,
        "name": "course 26",
        "price": 75.4,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
        "subjectId": "GDS014",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
    },
    {
        "id": 27,
        "name": "course 27",
        "price": 78.1,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg",
        "subjectId": "MKT014",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b088", name: "NAME" }
    },
    {
        "id": 28,
        "name": "course 28",
        "price": 80.8,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "rate": 4,
        "imageURL": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
        "subjectId": "GDS015",
        mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b089", name: "NAME" }
    }
];

export default courses;