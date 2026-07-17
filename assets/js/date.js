const timeStructure = {
  minute: 60,
  hour:   60 * 60,
  day:    60 * 60 * 24,
  week:   60 * 60 * 24 * 7,
  month:  60 * 60 * 24 * 30.44,
  year:   60 * 60 * 24 * 365.25
}

function formatDuration(seconds, wiggle=1) {
  if (seconds < timeStructure.day) return "within a day"

  const units = [
    ["year", timeStructure.year],
    ["month", timeStructure.month],
    ["week", timeStructure.week],
    ["day", timeStructure.day],
  ]

  const unit = units.find(([, size]) => seconds >= size * wiggle)
  if (!unit) return "ages"

  const [name, size] = unit
  const value = Math.floor(seconds / size)
  return `${value} ${name}${value === 1 ? "" : "s"}`
}

function formatAgo(date) {
  const seconds = (Date.now() - date.getTime()) / 1000

  if (seconds < timeStructure.day) return "less than a day ago"

  return `${formatDuration(seconds)} ago`
}

document.querySelectorAll(".last-updated").forEach(el => {
  const published = new Date(el.dataset.published)
  const updated = new Date(el.dataset.updated)

  const afterPublication =
    (updated.getTime() - published.getTime()) / 1000

  el.textContent =
    `Last updated ${formatAgo(updated)}, ${formatDuration(afterPublication)} after publication`
});

document.querySelectorAll("time.publication-age").forEach(el => {
  const published = new Date(el.dateTime)
  secondsAgo = (Date.now() - published.getTime()) / 1000
  el.textContent = `more than ${formatDuration(secondsAgo, 2)} ago`
})
