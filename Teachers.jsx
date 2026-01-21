import { useState } from "react";
import "./Teachers.css";

function Teachers() {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Mr. Sharma", email: "sharma@gmail.com", subject: "Maths" },
    { id: 2, name: "Ms. Patel", email: "patel@gmail.com", subject: "Science" },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [highlightId, setHighlightId] = useState(null);

  // ADD / UPDATE TEACHER
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId === null) {
      const newId = Date.now();
      setTeachers([...teachers, { id: newId, name, email, subject }]);
      setHighlightId(newId);
    } else {
      setTeachers(
        teachers.map((t) =>
          t.id === editingId ? { ...t, name, email, subject } : t
        )
      );
      setHighlightId(editingId);
      setEditingId(null);
    }

    setName("");
    setEmail("");
    setSubject("");

    setTimeout(() => setHighlightId(null), 1000);
  };

  // EDIT
  const editTeacher = (teacher) => {
    setName(teacher.name);
    setEmail(teacher.email);
    setSubject(teacher.subject);
    setEditingId(teacher.id);
  };

  // DELETE WITH CONFIRM
  const deleteTeacher = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this teacher?"
    );

    if (confirmDelete) {
      setTeachers(teachers.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="page">
      <h2>Teacher Management</h2>

      {editingId && (
        <div className="edit-mode">Editing Teacher ID: {editingId}</div>
      )}

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Teacher Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <button type="submit">
          {editingId ? "Update Teacher" : "Add Teacher"}
        </button>
      </form>

      <br />

      {/* TABLE */}
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((t) => (
            <tr
              key={t.id}
              className={highlightId === t.id ? "highlight" : ""}
            >
              <td>{t.name}</td>
              <td>{t.email}</td>
              <td>{t.subject}</td>
              <td>
                <button onClick={() => editTeacher(t)}>Edit</button>
                <button onClick={() => deleteTeacher(t.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teachers;