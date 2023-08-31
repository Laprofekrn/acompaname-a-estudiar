import fs from "fs";

import surveys from "./data/surveys.mjs";

function answers(surveys, meanings) {
  const newSurveys = surveys
    .map((survey) =>
      survey
        .map((reactive) => {
          const tagNames = Object.keys(reactive.tags).sort();
          return tagNames.map((tag) => {
            return { [tag]: reactive.tags[tag] };
          });
        })
        .flat()
    )
    .flat();

  const tags = {};
  newSurveys.forEach((tag) => {
    const key = Object.keys(tag)[0];
    tags[key]
      ? (tags[key] = [...tags[key], ...tag[key]].sort())
      : (tags[key] = tag[key]);
    return tags;
  });

  const entries = Object.entries(tags).sort();
  const finalTags = entries.map(([key, value], index) => {
    const rawValues = new Set(value);
    const values = [...rawValues];
    const newTag = {
      id: index + 1,
      totalAnswers: values.length,
      tag: key,
      answers: values,
      meaning: { paragraphs: meanings[key].length, info: meanings[key] },
    };
    return newTag;
  });

  return finalTags;
}

function tags(surveys) {
  const allTags = surveys
    .map((survey) => {
      const tags = survey.map(({ tags }) =>
        Object.keys(tags)
          .map((tag) => tags[tag])
          .flat()
      );
      return tags.flat(surveys);
    })
    .flat();

  const tagsSorted = allTags.flat().sort();
  const tagsCleaned = new Set(tagsSorted);
  return [...tagsCleaned];
}

function actorsTags(surveys) {
  const actorsTags = surveys.map((survey, index) => {
    const actor = { tags: [], answers: [], tagged: {} };
    survey.forEach((reactive) => {
      const keys = Object.keys(reactive.tags);
      keys.forEach((key) =>
        actor.tagged[key]
          ? (actor.tagged[key] = [...actor.tagged[key], reactive.tags[key]]
              .flat()
              .sort())
          : (actor.tagged[key] = reactive.tags[key])
      );

      const values = Object.values(reactive.tags).flat();

      const rawAnswers = new Set([...actor.answers, ...values]);
      const rawKeys = new Set([...actor.tags, ...keys]);

      const cleanKeys = [...rawKeys].sort();
      const cleanAnswers = [...rawAnswers].sort();

      actor.name = actor.name ?? reactive.actor;
      actor.id = actor.id ?? index + 1;
      actor.tags = cleanKeys;
      actor.totalTags = actor.tags.length;
      actor.answers = cleanAnswers;
      actor.totalAnswers = actor.answers.length;
    });
    return actor;
  });
  return actorsTags;
}

function meaningTags(tags) {
  const meanings = {};
  tags.forEach((tag) => (meanings[tag.tag] = tag.meaning));
  return meanings;
}

const content = "actorsTags(surveys)";
const nombreArchivo = "individualTags.mjs";
const contenidoArchivo = JSON.stringify(content);

fs.writeFile(nombreArchivo, contenidoArchivo, (error) => {
  if (error) {
    console.error("Error al escribir en el archivo:", error);
    return;
  }
});
