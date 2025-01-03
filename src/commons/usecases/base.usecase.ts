export interface BaseUseCase<IN, OUT> {
    execute(input: IN): Promise<OUT>;
}