// Sample PDF data URLs (these would normally be actual PDF data)
const samplePdfData =
  "data:application/pdf;base64,JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G";

export const sampleBooks = [
  {
    id: "1",
    title: "Designing Data Intensive Applications",
    author: "Erich Gamma et al.",
    fileData: samplePdfData,
    fileName: "design-patterns.pdf",
    createdAt: new Date().toISOString(),
    cover: "../../asset/2.jpeg",
  },
  {
    id: "2",
    title: "Learning Domain Driven Design",
    author: "Erich Gamma et al.",
    fileData: samplePdfData,
    fileName: "design-patterns.pdf",
    createdAt: new Date().toISOString(),
    cover: "../../asset/1.png",
  },
  {
    id: "3",
    title: "Learning Domain Driven Design",
    author: "Erich Gamma et al.",
    fileData: samplePdfData,
    fileName: "design-patterns.pdf",
    createdAt: new Date().toISOString(),
    cover: "../../asset/3.jpg",
  },
  {
    id: "4",
    title: "Learning Domain Driven Design",
    author: "Erich Gamma et al.",
    fileData: samplePdfData,
    fileName: "design-patterns.pdf",
    createdAt: new Date().toISOString(),
    cover: "../../asset/4.jpg",
  },
  {
    id: "5",
    title: "Learning Domain Driven Design",
    author: "Erich Gamma et al.",
    fileData: samplePdfData,
    fileName: "design-patterns.pdf",
    createdAt: new Date().toISOString(),
    cover: "../../asset/4.jpg",
  },
];
