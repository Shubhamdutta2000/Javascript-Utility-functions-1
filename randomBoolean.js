// function to create a random boolean
function randomBoolean()
{
    // create our random boolean
    const randomBoolean = () => Math.random() >= 0.5;

    // result will be true or false
    const result = randomBoolean();

    return result;
}