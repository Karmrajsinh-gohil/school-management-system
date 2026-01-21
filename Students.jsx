import { useState } from "react";

function Students() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", className: "10", email: "rahul@gmail.com" },
    { id: 2, name: "Amit", className: "9", email: "amit@gmail.com" },
  ]);

  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null);

  // ADD or UPDATE STUDENT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId === null) {
      // ADD
      setStudents([
        ...students,
        {
          id: Date.now(),
          name,
          className,
          email,
        },
      ]);
    } else {
      // UPDATE
      setStudents(
        students.map((s) =>
          s.id === editingId
            ? { ...s, name, className, email }
            : s
        )
      );
      setEditingId(null);
    }

    // clear form
    setName("");
    setClassName("");
    setEmail("");
  };

  // EDIT STUDENT
  const editStudent = (student) => {
    setName(student.name);
    setClassName(student.className);
    setEmail(student.email);
    setEditingId(student.id);
  };

  // DELETE STUDENT
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div>
      <h2>Student Management</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">
          {editingId ? "Update Student" : "Add Student"}
        </button>
      </form>

      <br />

      {/* TABLE */}
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.className}</td>
              <td>{s.email}</td>
              <td>
                <button onClick={() => editStudent(s)}>Edit</button>
                <button onClick={() => deleteStudent(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;