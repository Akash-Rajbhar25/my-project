document.addEventListener('DOMContentLoaded', () => {
    const timetableBody = document.getElementById('timetable-body');
    const resetButton = document.getElementById('reset-button');

    function populateTable() {
        // Retrieve data from local storage
        const subjectData = JSON.parse(localStorage.getItem('subject-form')) || [];
        const teacherData = JSON.parse(localStorage.getItem('teacher-form')) || [];
        const classroomData = JSON.parse(localStorage.getItem('classroom-form')) || [];
        const timeslotData = JSON.parse(localStorage.getItem('timeslot-form')) || [];

        // Clear existing table rows
        timetableBody.innerHTML = '';

        // Find the maximum length of arrays to iterate over
        const maxLength = Math.max(subjectData.length, teacherData.length, classroomData.length, timeslotData.length);

        // Populate the table rows
        for (let i = 0; i < maxLength; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${subjectData[i] || ''}</td>
                <td>${teacherData[i] || ''}</td>
                <td>${classroomData[i] || ''}</td>
                <td>${timeslotData[i] || ''}</td>
            `;
            timetableBody.appendChild(row);
        }
    }

    function resetTimetable() {
        // Clear data from local storage
        localStorage.removeItem('subject-form');
        localStorage.removeItem('teacher-form');
        localStorage.removeItem('classroom-form');
        localStorage.removeItem('timeslot-form');

        // Clear the table
        timetableBody.innerHTML = '';
    }

    // Call the function to populate the table on page load
    populateTable();

    // Attach event listener to the reset button
    resetButton.addEventListener('click', resetTimetable);
});
