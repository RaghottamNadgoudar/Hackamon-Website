// src/data/teamsData.js
// This would typically come from your backend/database
export const teamsData = [
  {
    id: 1,
    teamName: "Test",
    teamPassword: "Test",
    department: "CSE",
    teamLead: {
      name: "Sumukha",
      usn: "Ragh",
      email: "sumukha@gmail.com",
    },
    members: [
      { name: "Sne", email: "rag@gmail.com", usn: "1RV" },
      { name: "Sne", email: "Sne@gmail.com", usn: "1rv" },
      { name: "Pran", email: "Pran@gmail.com", usn: "1Rv" },
    ],
  },
  // Add more teams based on your Excel data
  {
    id: 2,
    teamName: "CodeMasters",
    teamPassword: "pokemon123",
    department: "CSE",
    teamLead: {
      name: "Team Lead 2",
      usn: "1RV21CS001",
      email: "lead2@gmail.com",
    },
    members: [
      { name: "Member 1", email: "member1@gmail.com", usn: "1RV21CS002" },
      { name: "Member 2", email: "member2@gmail.com", usn: "1RV21CS003" },
    ],
  },
];

export const authenticateTeam = (teamName, teamPassword) => {
  return teamsData.find(
    (team) => team.teamName === teamName && team.teamPassword === teamPassword
  );
};
