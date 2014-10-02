// check that userId specificied owns documents
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}
