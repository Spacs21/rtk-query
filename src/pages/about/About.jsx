import React, { useState } from 'react';
import {
  useGetStudentsQuery,
  useAddStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} from '../../redux/api';
import './About.scss';

const About = () => {
  const {data} = useGetStudentsQuery();
  const [addStudent] = useAddStudentMutation();
  const [updateStudent] = useUpdateStudentMutation();
  const [deleteStudent] = useDeleteStudentMutation();
  const [formData, setFormData] = useState({ name: '', score: '' });
  const [editData, setEditData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      updateStudent({ id: editData.id, ...formData });
      setEditData(null);
    } else {
      addStudent(formData);
    }
    setFormData({ name: '', score: '' });
  };

  const handleEdit = (student) => {
    setFormData({ name: student.name, score: student.score });
    setEditData(student);
  };

  const handleDelete = (id) => {
    deleteStudent(id);
  };

  return (
    <div className="about-container">
      <h2>Students</h2>
      <div className="add-student-form">
        <h3>{editData ? 'Edit Student' : 'Add New Student'}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Score"
            value={formData.score}
            onChange={(e) => setFormData({ ...formData, score: e.target.value })}
            required
          />
          <button type="submit">{editData ? 'Update Student' : 'Add Student'}</button>
        </form>
      </div>
      <div className="students-list">
        {data?.map((student) => (
          <div key={student.id} className="student-card">
            <div className="student-info">
              <h3>{student.name}</h3>
              <p>Score: {student.score}</p>
            </div>
            <div className="student-actions">
              <button className="edit" onClick={() => handleEdit(student)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(student.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
