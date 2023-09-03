import ClassEntry from "./ClassEntry";

const yearList = [
  {
    year: "2019-2020",
    schoolingYear: "1st",
    terms: [
      {
        term: "Fall",
        classes: [
          {
            code: "CSC 106",
            title: "Practice of Computer Science",
          },
          {
            code: "CSC 110",
            title: "Fundamentals of Programming I",
          },
          {
            code: "ENGL 135",
            title: "Academic Reading and Writing",
          },
          {
            code: "MATH 100",
            title: "Calculus I",
          },
          {
            code: "MUS 109",
            title: "Great Film Music",
          },
        ],
      },
      {
        term: "Spring",
        classes: [
          {
            code: "CSC 115",
            title: "Fundamentals of Programming II",
          },
          {
            code: "ECON 104",
            title: "Principles of Macroeconomics",
          },
          {
            code: "MATH 101",
            title: "Calculus II",
          },
          {
            code: "MATH 122",
            title: "Logic and Foundations",
          },
          {
            code: "STAT 123",
            title: "Data Science",
          },
        ],
      },
      {
        year: "2019-2020",
        schoolingYear: "1st",
        term: "Summer",
        classes: [
          {
            code: "CSC 225",
            title: "Algorithms and Data Structures I",
          },
          {
            code: "MATH 211",
            title: "Matrix Algebra I",
          },
        ],
      },
    ],
  },
  {
    year: "2020-2021",
    schoolingYear: "2nd",
    terms: [
      {
        term: "Fall",
        classes: [
          {
            code: "CSC 230",
            title: "Computer Architecture",
          },
          {
            code: "MATH 200",
            title: "Calculus III",
          },
          {
            code: "MATH 222",
            title: "Discrete and Combinatorial Mathematics",
          },
          {
            code: "STAT 260",
            title: "Intro to Probability and Statistics I",
          },
        ],
      },
      {
        term: "Spring",
        classes: [
          {
            code: "STAT 261",
            title: "Intro to Probability and Statistics II",
          },
          {
            code: "CSC 226",
            title: "Algorithms and Data Structures II",
          },
          {
            code: "MATH 204",
            title: "Calculus IV",
          },
          {
            code: "SENG 265",
            title: "Software Development Methods",
          },
        ],
      },
    ],
  },
];

export default function ClassList() {
  const sortedYear = yearList.sort((a, b) => {
    if (a.year < b.year) {
      return 1;
    } else if (a.year > b.year) {
      return -1;
    } else {
      return 0;
    }
  }).reverse()
 

  // Sort the terms in each year
  sortedYear.forEach((year) => {
    year.terms.sort((a, b) => {
      if (a.term < b.term) {
        return 1;
      } else if (a.term > b.term) {
        return -1;
      } else {
        return 0;
      }
    }).reverse();
    // Sort classes in term by code
    year.terms.forEach((term) => {
      term.classes.sort((a, b) => {
        if (a.code < b.code) {
          return 1;
        } else if (a.code > b.code) {
          return -1;
        } else {
          return 0;
        }
      });
    });
  });

  return (
    <div>
      {sortedYear.map((year) => (
        <>
          <div>
            <h4>{year.schoolingYear} Year</h4>
          </div>

          <ul className="">
            {year.terms.map((term) => (
              <li>{term.term}  </li>
            ))}
          </ul>
        </>

        // )}
      ))}
    </div>
  );
}
