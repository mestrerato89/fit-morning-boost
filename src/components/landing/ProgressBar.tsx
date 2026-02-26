const ProgressBar = () => {
  return (
    <div className="bg-muted px-4 py-3">
      <div className="mx-auto max-w-lg">
        <div className="flex items-center justify-between text-xs font-semibold text-foreground">
          <span>🔥 Vagas limitadas</span>
          <span className="text-destructive">17 restantes</span>
        </div>
        <div className="mt-1 h-2 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-destructive transition-all"
            style={{ width: "83%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
