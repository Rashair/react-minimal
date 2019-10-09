import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

const data = [
  {
    teacherName: "Jan Nowak",
    teacherAge: 36,
    active: true,
    students: [
      {
        name: "Maciej Janosz",
        age: 12
      },
      {
        name: "Wojciech Kowalski",
        age: 15
      },
      {
        name: "Wioletta Poznańska",
        age: 1000000
      }
    ]
  },
  {
    teacherName: "Mariusz Flasinski",
    teacherAge: 56,
    active: true,
    students: [
      {
        name: "Jan Kot",
        age: 12
      },
      {
        name: "Jan Ziobro",
        age: 15
      },
      {
        name: "Adam Malysz",
        age: 41
      }
    ]
  },
  {
    teacherName: "Wojciech Kuzak",
    teacherAge: 44,
    active: false,
    students: [
      {
        name: "Janina Wronska",
        age: 22
      },
      {
        name: "John Dover",
        age: 7
      },
      {
        name: "Emil Petterson",
        age: 46
      }
    ]
  }
];

const allStudents = [].concat(
  ...data.map(teacher =>
    teacher.students.map(student => `${student.name}, age:${student.age}`)
  )
);
const sortedStudents = []
  .concat(
    ...data.map(teacher =>
      teacher.students.map(student => `${student.name}, age:${student.age}`)
    )
  )
  .sort();
const oldStudents = [].concat(
  ...data
    .filter(teacher => teacher.active === true)
    .map(teacher =>
      teacher.students
        .filter(student => student.age > 20)
        .map(student => `${student.name}, age:${student.age}`)
    )
);

class Students extends React.Component {
  constructor() {
    super();

    this.state = {
      arr: []
    };
  }

  render() {
    return (
      <Container>
        <ButtonToolbar>
          <Button
            variant="primary"
            type="button"
            onClick={() => this.setState({ arr: allStudents })}
          >
            All students
          </Button>
          <br />
          <Button
            type="button"
            onClick={() => this.setState({ arr: sortedStudents })}
          >
            Sort students
          </Button>
          <br />
          <Button
            type="button"
            onClick={() => this.setState({ arr: oldStudents })}
          >
            Old students
          </Button>
        </ButtonToolbar>
        <br />
        <div>
          {this.state.arr.map(student => (
            <p key={student.id}>{student}</p>
          ))}
        </div>
      </Container>
    );
  }
}

export default Students;
