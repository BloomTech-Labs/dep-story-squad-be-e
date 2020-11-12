const Bot_Submissions = [...new Array(3).map((i, idx) => ({
  ID: idx,
  ChildID: idx,
  Bot_StoryID: idx,
  HasRead: false,
  HasWritten: false,
  Complexity: null,
}))];

exports.seed = function(knex) {
  return knex('Bot_Submissions').insert(Bot_Submissions);

};
