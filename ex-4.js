// Exercise #4
let getJohnProfile = async () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here

async function showProfile() {
  try{
    const profile = await getJohnProfile();
    console.log(profile);
  }catch(error){
    console.log(error);
  }
}

showProfile();