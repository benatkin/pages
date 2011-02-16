function(doc) {
  var markdown = (typeof doc.markdown === 'string') ? doc.markdown : '';
    markdown = markdown;
  return {
    _id : doc._id,
    _rev : doc._rev,
    title : doc.title,
    markdown : markdown.replace('</textarea>', '&lt;/textarea>')
  };
};
