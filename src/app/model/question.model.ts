export interface Question {
    id: number,
    questionText: string,
    options: string[],
    correctAnswer: string | number,
    author: string,
    stats: Stats
}

export interface Stats {
    lastAskedDate: string,
	askedCount: number,
	percent: number
}