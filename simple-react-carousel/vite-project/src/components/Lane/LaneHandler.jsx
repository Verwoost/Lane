import Lane from "./Lane";

const genresPlaceholder = [
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 35,
    name: "Comedy",
  },
];

const movies = [
  //wordt uiteindelijk doorgegeven als prop
  {
    backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
    title: "Fight Club",
    id: 550,
  },
  {
    backdrop_path: "/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg",
    title: "The Poseidon Adventure",
    id: 551,
  },
  {
    backdrop_path: "/k4JIHyAXaGHwAwT7y5Skd17f0Wl.jpg",
    title: "Pane e tulipani",
    id: 552,
  },
  {
    backdrop_path: "/r3xsFBD1VTUusk393bBc7SsDUJe.jpg",
    title: "Dogville",
    id: 553,
  },
  {
    backdrop_path: "/1qwXItFKqvKYyW1CwbYhxyUC8Pj.jpg",
    title: "The Cuckoo",
    id: 554,
  },
  {
    backdrop_path: "/1fJSyFhvxBjyLZsBnYs4641YXu1.jpg",
    title: "Basquiat",
    id: 549,
  },
  {
    backdrop_path: "/zyO6j74DKMWfp5snWg6Hwo0T3Mz.jpg",
    title: "Rashomon",
    id: 548,
  },
  {
    backdrop_path: "/ww9pokP6M6gp2Iu0o3sT5B7eN66.jpg",
    title: "The Horse Whisperer",
    id: 547,
  },
  {
    backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
    title: "Fight Club",
    id: 550,
  },
  {
    backdrop_path: "/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg",
    title: "The Poseidon Adventure",
    id: 551,
  },
  {
    backdrop_path: "/k4JIHyAXaGHwAwT7y5Skd17f0Wl.jpg",
    title: "Pane e tulipani",
    id: 552,
  },
  {
    backdrop_path: "/r3xsFBD1VTUusk393bBc7SsDUJe.jpg",
    title: "Dogville",
    id: 553,
  },
  {
    backdrop_path: "/1qwXItFKqvKYyW1CwbYhxyUC8Pj.jpg",
    title: "The Cuckoo",
    id: 554,
  },
  {
    backdrop_path: "/1fJSyFhvxBjyLZsBnYs4641YXu1.jpg",
    title: "Basquiat",
    id: 549,
  },
  {
    backdrop_path: "/zyO6j74DKMWfp5snWg6Hwo0T3Mz.jpg",
    title: "Rashomon",
    id: 548,
  },
  {
    backdrop_path: "/ww9pokP6M6gp2Iu0o3sT5B7eN66.jpg",
    title: "The Horse Whisperer",
    id: 547,
  },
  {
    backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
    title: "Fight Club",
    id: 550,
  },
  {
    backdrop_path: "/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg",
    title: "The Poseidon Adventure",
    id: 551,
  },
  {
    backdrop_path: "/k4JIHyAXaGHwAwT7y5Skd17f0Wl.jpg",
    title: "Pane e tulipani",
    id: 552,
  },
  {
    backdrop_path: "/r3xsFBD1VTUusk393bBc7SsDUJe.jpg",
    title: "Dogville",
    id: 553,
  },
  {
    backdrop_path: "/1qwXItFKqvKYyW1CwbYhxyUC8Pj.jpg",
    title: "The Cuckoo",
    id: 554,
  },
  {
    backdrop_path: "/1fJSyFhvxBjyLZsBnYs4641YXu1.jpg",
    title: "Basquiat",
    id: 549,
  },
  {
    backdrop_path: "/zyO6j74DKMWfp5snWg6Hwo0T3Mz.jpg",
    title: "Rashomon",
    id: 548,
  },
  {
    backdrop_path: "/ww9pokP6M6gp2Iu0o3sT5B7eN66.jpg",
    title: "The Horse Whisperer",
    id: 547,
  },
  {
    backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
    title: "Fight Club",
    id: 550,
  },
  {
    backdrop_path: "/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg",
    title: "The Poseidon Adventure",
    id: 551,
  },
  {
    backdrop_path: "/k4JIHyAXaGHwAwT7y5Skd17f0Wl.jpg",
    title: "Pane e tulipani",
    id: 552,
  },
  {
    backdrop_path: "/r3xsFBD1VTUusk393bBc7SsDUJe.jpg",
    title: "Dogville",
    id: 553,
  },
  {
    backdrop_path: "/1qwXItFKqvKYyW1CwbYhxyUC8Pj.jpg",
    title: "The Cuckoo",
    id: 554,
  },
  {
    backdrop_path: "/1fJSyFhvxBjyLZsBnYs4641YXu1.jpg",
    title: "Basquiat",
    id: 549,
  },
  {
    backdrop_path: "/zyO6j74DKMWfp5snWg6Hwo0T3Mz.jpg",
    title: "Rashomon",
    id: 548,
  },
  {
    backdrop_path: "/ww9pokP6M6gp2Iu0o3sT5B7eN66.jpg",
    title: "The Horse Whisperer",
    id: 547,
  },
  {
    backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
    title: "Fight Club",
    id: 550,
  },
  {
    backdrop_path: "/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg",
    title: "The Poseidon Adventure",
    id: 551,
  },
  {
    backdrop_path: "/k4JIHyAXaGHwAwT7y5Skd17f0Wl.jpg",
    title: "Pane e tulipani",
    id: 552,
  },
  {
    backdrop_path: "/r3xsFBD1VTUusk393bBc7SsDUJe.jpg",
    title: "Dogville",
    id: 553,
  },
  {
    backdrop_path: "/1qwXItFKqvKYyW1CwbYhxyUC8Pj.jpg",
    title: "The Cuckoo",
    id: 554,
  },
  {
    backdrop_path: "/1fJSyFhvxBjyLZsBnYs4641YXu1.jpg",
    title: "Basquiat",
    id: 549,
  },
  {
    backdrop_path: "/zyO6j74DKMWfp5snWg6Hwo0T3Mz.jpg",
    title: "Rashomon",
    id: 548,
  },
  {
    backdrop_path: "/ww9pokP6M6gp2Iu0o3sT5B7eN66.jpg",
    title: "The Horse Whisperer",
    id: 547,
  },
  {
    backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
    title: "Fight Club",
    id: 550,
  },
  {
    backdrop_path: "/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg",
    title: "The Poseidon Adventure",
    id: 551,
  },
  {
    backdrop_path: "/k4JIHyAXaGHwAwT7y5Skd17f0Wl.jpg",
    title: "Pane e tulipani",
    id: 552,
  },
  {
    backdrop_path: "/r3xsFBD1VTUusk393bBc7SsDUJe.jpg",
    title: "Dogville",
    id: 553,
  },
  {
    backdrop_path: "/1qwXItFKqvKYyW1CwbYhxyUC8Pj.jpg",
    title: "The Cuckoo",
    id: 554,
  },
  {
    backdrop_path: "/1fJSyFhvxBjyLZsBnYs4641YXu1.jpg",
    title: "Basquiat",
    id: 549,
  },
  {
    backdrop_path: "/zyO6j74DKMWfp5snWg6Hwo0T3Mz.jpg",
    title: "Rashomon",
    id: 548,
  },
  {
    backdrop_path: "/ww9pokP6M6gp2Iu0o3sT5B7eN66.jpg",
    title: "The Horse Whisperer",
    id: 547,
  },
];

const screenWidth = document.getElementById("root").clientWidth;

function LaneHandler() {
  function getAmount() {
    if (screenWidth < 500) {
      return 2;
    }
    if (screenWidth < 800 && screenWidth > 500) {
      return 3;
    }
    if (screenWidth < 1100 && screenWidth > 800) {
      return 4;
    }
    if (screenWidth > 1100) {
      return 6;
    }
  }

  function getSlices() {
    let slices = [];
    let amount = getAmount();
    let number = Math.round(movies.length / amount);
    for (let i = 0; i < number; i++) {
      slices.push(movies.slice(i * amount, amount + i * amount));
    }
    console.log(slices);
    return slices;
  }
  return (
    <div>
      <Lane slices={getSlices()} itemsPerLane={getAmount()}></Lane>
    </div>
  );
}
export default LaneHandler;
